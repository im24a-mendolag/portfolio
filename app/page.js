import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';
import { skills } from '@/data/skills';
import { projectData } from '@/data/projects';

export default function Home() {
  // Filter featured projects
  const featuredProjects = Object.entries(projectData)
    .filter(([slug, project]) => project.featured)
    .map(([slug, project]) => ({
      tag: project.tag,
      title: project.title,
      description: project.description,
      href: `/projects/${slug}`,
    }));

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-7xl mx-auto px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <h2 className="text-5xl font-bold mb-4">Hi, I'm Giovanni Mendola</h2>
          <p className="text-lg mb-8 text-gray-300">
            Full-stack developer specializing in modern web technologies and user-centered design.
          </p>
          <div className="flex gap-4">
            <Link
              href="/projects"
              className="bg-white text-black px-6 py-3 font-medium hover:opacity-90 transition-opacity rounded-lg"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="bg-gray-900 border border-white text-white px-6 py-3 font-medium hover:opacity-90 transition-opacity rounded-lg"
            >
              Contact Me
            </Link>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Featured Projects</h2>
          {featuredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.href}
                  tag={project.tag}
                  title={project.title}
                  description={project.description}
                  href={project.href}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No featured projects available.</p>
          )}
        </section>

        {/* Skills & Technologies Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-gray-900 border border-white px-4 py-3 text-center text-white hover:scale-105 transition-transform duration-300 rounded-lg cursor-pointer"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
