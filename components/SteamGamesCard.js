import GameThumb from '@/components/GameThumb';

// Sample data mirrors the shape returned by the Steam Web API
// (ISteamUserStats/GetRecentlyPlayedGames). Swap this for live data once wired up.
const sampleGames = [
  { appid: 730, name: 'Counter-Strike 2', playtime_2weeks: 412, playtime_forever: 18420 },
  { appid: 570, name: 'Dota 2', playtime_2weeks: 190, playtime_forever: 9630 },
  { appid: 1091500, name: 'Cyberpunk 2077', playtime_2weeks: 145, playtime_forever: 3120 },
  { appid: 271590, name: 'Grand Theft Auto V', playtime_2weeks: 60, playtime_forever: 5480 },
];

function formatHours(minutes) {
  const hours = minutes / 60;
  if (hours >= 100) return `${Math.round(hours)}h`;
  return `${hours.toFixed(1)}h`;
}

export default function SteamGamesCard({ games = sampleGames }) {
  return (
    <div className="bg-white/5 rounded-md overflow-hidden">
      <div className="flex items-center justify-between p-6 pb-4">
        <div className="flex items-center gap-3">
          <span
            className="bg-contain bg-center bg-no-repeat w-6 h-6"
            role="img"
            aria-label="Steam logo"
            style={{ backgroundImage: 'url(https://cdn.simpleicons.org/steam/FFFFFF)' }}
          />
          <div>
            <h3 className="text-lg font-bold text-white leading-tight">Recently Played</h3>
            <p className="text-white/50 text-xs">Live from the Steam Web API</p>
          </div>
        </div>
        <span className="flex items-center gap-1.5 text-white/60 text-xs">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Live
        </span>
      </div>

      <ul className="divide-y divide-white/5">
        {games.map((game) => (
          <li
            key={game.appid}
            className="flex items-center gap-4 px-6 py-3 hover:bg-white/5 transition-colors duration-200"
          >
            <div className="w-24 aspect-[92/43] rounded overflow-hidden shrink-0 bg-white/5">
              <GameThumb
                appid={game.appid}
                name={game.name}
                imgIconUrl={game.img_icon_url}
                header={game.header}
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-white text-sm font-medium truncate">{game.name}</p>
              <p className="text-white/50 text-xs">
                {formatHours(game.playtime_forever)} total
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
