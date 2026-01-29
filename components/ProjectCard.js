import Link from 'next/link';

export default function ProjectCard({ tag, title, description, href = '#' }) {
  return (
    <Link href={href} className="block">
      <div className="bg-gray-900 border border-white p-6 relative hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg">
        <div className="flex items-start justify-between mb-4">
          <span className="bg-white text-black text-xs font-medium px-2 py-1 rounded">
            {tag}
          </span>
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white text-sm">{description}</p>
      </div>
    </Link>
  );
}
