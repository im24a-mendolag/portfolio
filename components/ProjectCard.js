import Link from 'next/link';

export default function ProjectCard({ tag, title, description, image, href = '#', className = '' }) {
  return (
    <Link href={href} className={`block ${className}`}>
      <div className="bg-gray-900 border border-white relative hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg overflow-hidden">
        {image && (
          <div className="w-full aspect-[2/1] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-6">
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
      </div>
    </Link>
  );
}
