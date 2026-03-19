import { getTechnology } from '@/data/technologies';

export default function TechnologyBadge({ technologyName, size = 'default' }) {
  const technology = getTechnology(technologyName);
  const isLg = size === 'lg';

  return (
    <div className={`bg-white/5 rounded-md ${isLg ? 'px-5 py-4 text-white' : 'px-4 py-3 text-white/80'}`}>
      <div className={`flex items-center justify-center ${isLg ? 'gap-4' : 'gap-3'}`}>
        {technology.logo ? (
          <span
            className={`bg-contain bg-center bg-no-repeat ${isLg ? 'w-7 h-7' : 'w-5 h-5'}`}
            role="img"
            aria-label={`${technology.name} logo`}
            style={{ backgroundImage: `url(${technology.logo})` }}
          />
        ) : (
          <span
            className={`rounded-full border border-white/70 inline-flex items-center justify-center leading-none ${isLg ? 'w-7 h-7 text-xs' : 'w-5 h-5 text-[10px]'}`}
            aria-hidden="true"
          >
            {technology.name.slice(0, 2).toUpperCase()}
          </span>
        )}
        <span className={`text-center ${isLg ? 'text-base font-medium' : ''}`}>{technology.name}</span>
      </div>
    </div>
  );
}
