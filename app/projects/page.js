import ProjectCard from '@/components/ProjectCard';
import { projectData } from '@/data/projects';

export default function Projects() {
  const projects = Object.entries(projectData).map(([slug, project]) => ({
    tag: project.tag,
    title: project.title,
    description: project.description,
    href: `/projects/${slug}`,
  }));

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-7xl mx-auto px-8 py-12">
        <section className="mb-16">
          <h1 className="text-5xl font-bold mb-4">Projects</h1>
          <p className="text-lg mb-8 text-gray-300">
            A collection of my recent work and projects.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.href}
                tag={project.tag}
                title={project.title}
                description={project.description}
                href={project.href}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
