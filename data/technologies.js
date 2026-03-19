const technologyCatalog = [
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
    id: 'nodejs',
    name: 'Node.js',
    logo: 'https://cdn.simpleicons.org/nodedotjs/5FA04E',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    logo: 'https://cdn.simpleicons.org/mongodb/47A248',
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
    id: 'd3',
    name: 'D3.js',
    logo: 'https://cdn.simpleicons.org/d3dotjs/F9A03C',
  },
  {
    id: 'stripe',
    name: 'Stripe',
    logo: 'https://cdn.simpleicons.org/stripe/635BFF',
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    logo: 'https://cdn.simpleicons.org/graphql/E10098',
  },
  {
    id: 'websockets',
    name: 'WebSockets',
    logo: 'https://cdn.simpleicons.org/socketdotio/FFFFFF',
  },
];

const technologyLookup = technologyCatalog.reduce((map, technology) => {
  [technology.id, technology.name].forEach((identifier) => {
    map[identifier.toLowerCase()] = technology;
  });
  return map;
}, {});

export const primarySkills = ['react', 'nextjs', 'typescript', 'tailwind'];

export const otherSkills = ['nodejs', 'postgresql', 'mongodb', 'docker'];

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
