const technologyCatalog = [
  {
    id: 'javascript',
    name: 'JavaScript',
    logo: 'https://cdn.simpleicons.org/javascript/F7DF1E',
  },
  {
    id: 'python',
    name: 'Python',
    logo: 'https://cdn.simpleicons.org/python/3776AB',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    logo: 'https://cdn.simpleicons.org/mysql/4479A1',
  },
  {
    id: 'git',
    name: 'Git',
    logo: 'https://cdn.simpleicons.org/git/F05032',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    logo: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF',
  },
  {
    id: 'react',
    name: 'React',
    logo: 'https://cdn.simpleicons.org/react/61DAFB',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    logo: 'https://cdn.simpleicons.org/typescript/3178C6',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    logo: 'https://cdn.simpleicons.org/postgresql/4169E1',
  },
  {
    id: 'docker',
    name: 'Docker',
    logo: 'https://cdn.simpleicons.org/docker/2496ED',
  },
  {
    id: 'prisma',
    name: 'Prisma',
    logo: 'https://cdn.simpleicons.org/prisma/2D3748',
  },
  {
    id: 'nextauth',
    name: 'NextAuth.js',
    logo: 'https://cdn.simpleicons.org/auth0/EB5424',
  },
  {
    id: 'recharts',
    name: 'Recharts',
    logo: 'https://cdn.simpleicons.org/chartdotjs/FF6384',
  },
  {
    id: 'resend',
    name: 'Resend',
    logo: 'https://cdn.simpleicons.org/resend/FFFFFF',
  },
  {
    id: 'spring-boot',
    name: 'Spring Boot',
    logo: 'https://cdn.simpleicons.org/springboot/6DB33F',
  },
  {
    id: 'steam',
    name: 'Steam API',
    logo: 'https://cdn.simpleicons.org/steam/FFFFFF',
  },
];

const technologyLookup = technologyCatalog.reduce((map, technology) => {
  [technology.id, technology.name].forEach((identifier) => {
    map[identifier.toLowerCase()] = technology;
  });
  return map;
}, {});

export const primarySkills = ['nextjs', 'react', 'javascript', 'tailwind'];

export const otherSkills = ['typescript', 'python', 'postgresql', 'mysql', 'prisma', 'git'];

export const skills = [...primarySkills, ...otherSkills];

export function getTechnology(technologyIdentifier) {
  const key = technologyIdentifier.toLowerCase();
  return (
    technologyLookup[key] || {
      id: key.replace(/\s+/g, '-'),
      name: technologyIdentifier,
      logo: null,
    }
  );
}

export function getTechnologyByName(technologyName) {
  return getTechnology(technologyName);
}

export { technologyCatalog };
