import { getTechnology } from '@/data/technologies';

export default function TechnologyBadge({ technologyName }) {
  const technology = getTechnology(technologyName);

  return (
    <div className="bg-gray-900 border border-white px-4 py-3 text-white hover:scale-105 transition-transform duration-300 rounded-lg">
      <div className="flex items-center justify-center gap-3">
        {technology.logo ? (
          <span
            className="w-5 h-5 bg-contain bg-center bg-no-repeat"
            role="img"
            aria-label={`${technology.name} logo`}
            style={{ backgroundImage: `url(${technology.logo})` }}
          />
        ) : (
          <span
            className="w-5 h-5 rounded-full border border-white/70 inline-flex items-center justify-center text-[10px] leading-none"
            aria-hidden="true"
          >
            {technology.name.slice(0, 2).toUpperCase()}
          </span>
        )}
        <span className="text-center">{technology.name}</span>
      </div>
    </div>
  );
}
