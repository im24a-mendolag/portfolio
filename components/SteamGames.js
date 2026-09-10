import SteamGamesCard from '@/components/SteamGamesCard';

// Async Server Component: reads STEAM_API_KEY server-side only (never shipped to the
// browser), fetches recently played games, and caches the result for an hour so we
// don't hammer Steam or hit rate limits. Falls back to the card's sample data if the
// key/ID is missing or the Steam profile is private.
async function getHeaderImage(appid) {
  try {
    const res = await fetch(
      `https://store.steampowered.com/api/appdetails?appids=${appid}&filters=basic&l=en`,
      { next: { revalidate: 86400 } } // banners rarely change; cache a day
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data?.[appid]?.data?.header_image ?? null;
  } catch {
    return null;
  }
}

async function getRecentGames() {
  const key = process.env.STEAM_API_KEY;
  const steamId = process.env.STEAM_STEAMID;

  if (!key || !steamId) return null;

  try {
    const url =
      `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/` +
      `?key=${key}&steamid=${steamId}&count=8&format=json`;

    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;

    const data = await res.json();
    let games = data?.response?.games;
    if (!Array.isArray(games) || games.length === 0) return null;

    // Drop playtests, betas, demos and server tools — they aren't "games I play".
    const excludePattern = /\b(playtest|beta|demo|server|test|dedicated)\b/i;
    games = games.filter((game) => !excludePattern.test(game.name ?? '')).slice(0, 4);
    if (games.length === 0) return null;

    // Resolve each game's canonical banner. Newer titles only publish assets under
    // Steam's hashed store_item_assets path, so the predictable /steam/apps/{appid}/
    // header.jpg 404s for them — the storefront appdetails API always has the real URL.
    return Promise.all(
      games.map(async (game) => ({
        appid: game.appid,
        name: game.name,
        playtime_2weeks: game.playtime_2weeks ?? 0,
        playtime_forever: game.playtime_forever ?? 0,
        img_icon_url: game.img_icon_url,
        header: await getHeaderImage(game.appid),
      }))
    );
  } catch {
    return null;
  }
}

export default async function SteamGames() {
  const games = await getRecentGames();
  // If null, the card renders its built-in sample data.
  return <SteamGamesCard games={games ?? undefined} />;
}
