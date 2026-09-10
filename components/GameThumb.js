'use client';

import { useState } from 'react';

// Renders a game's wide header art, falling back to the small Steam icon when no
// banner is available. `header` is the canonical URL resolved server-side; if it's
// missing we try the predictable path before giving up to the icon.
export default function GameThumb({ appid, name, imgIconUrl, header }) {
  const [failed, setFailed] = useState(false);

  const headerUrl =
    header ?? `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/header.jpg`;
  const iconUrl = imgIconUrl
    ? `https://media.steampowered.com/steamcommunity/public/images/apps/${appid}/${imgIconUrl}.jpg`
    : null;

  if (failed || !appid) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-white/10">
        {iconUrl ? (
          <img src={iconUrl} alt={name} className="w-8 h-8 rounded-sm" />
        ) : (
          <span className="text-white/50 text-[10px] font-medium px-1 text-center leading-tight">
            {name}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={headerUrl}
      alt={name}
      onError={() => setFailed(true)}
      className="w-full h-full object-cover"
    />
  );
}
