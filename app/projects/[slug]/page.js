'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { projectData } from '@/data/projects';

export default function ProjectPage() {
  const { slug } = useParams();
  const router = useRouter();

  const project = projectData[slug] || {
    tag: 'Unknown',
    title: 'Project Not Found',
    description: 'This project does not exist',
    longDescription: 'The project you are looking for could not be found.',
    technologies: [],
    features: [],
    githubUrl: null,
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-7xl mx-auto px-8 py-12">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-white opacity-60 hover:opacity-100 transition-opacity mb-8"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </Link>

        {/* Project Header */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-white text-black text-sm font-medium px-3 py-1 rounded">
              {project.tag}
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-300 mb-6">{project.description}</p>
          <p className="text-lg text-gray-400 max-w-3xl">{project.longDescription}</p>
        </section>

        {/* Technologies Used */}
        {project.technologies.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="bg-gray-900 border border-white px-4 py-3 text-center text-white hover:scale-105 transition-transform duration-300 rounded-lg cursor-pointer"
                >
                  {tech}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Features */}
        {project.features.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-white p-4 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-white flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p className="text-white">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Action Buttons */}
        <section className="flex flex-wrap gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 border border-white text-white px-6 py-3 font-medium hover:opacity-90 transition-opacity rounded-lg inline-flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          )}
          <Link
            href="/projects"
            className="bg-white text-black px-6 py-3 font-medium hover:opacity-90 transition-opacity rounded-lg"
          >
            View All Projects
          </Link>
          <Link
            href="/contact"
            className="bg-gray-900 border border-white text-white px-6 py-3 font-medium hover:opacity-90 transition-opacity rounded-lg"
          >
            Get In Touch
          </Link>
        </section>
      </main>
    </div>
  );
}
