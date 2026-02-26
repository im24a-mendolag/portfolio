import ProjectCard from '@/components/ProjectCard';
import { projectData } from '@/data/projects';

export default function Projects() {
  const projects = Object.entries(projectData).map(([slug, project]) => ({
    tag: project.tag,
    title: project.title,
    description: project.description,
    image: project.image,
    href: `/projects/${slug}`,
  }));
  const desktopColumns = [[], [], []];
  const desktopColumnHeights = [0, 0, 0];

  projects.forEach((project) => {
    const projectWeight = project.image ? 2 : 1;
    const targetColumn = desktopColumnHeights.indexOf(Math.min(...desktopColumnHeights));

    desktopColumns[targetColumn].push(project);
    desktopColumnHeights[targetColumn] += projectWeight;
  });

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
            {projects.map((project) => (
              <ProjectCard
                key={project.href}
                tag={project.tag}
                title={project.title}
                description={project.description}
                image={project.image}
                href={project.href}
              />
            ))}
          </div>
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {desktopColumns.map((column, columnIndex) => (
              <div key={`desktop-column-${columnIndex}`} className="flex flex-col">
                {column.map((project, projectIndex) => {
                  const previousProject = column[projectIndex - 1];
                  const spacingClass =
                    projectIndex === 0
                      ? ''
                      : !project.image && previousProject && !previousProject.image
                        ? 'mt-12'
                        : 'mt-6';

                  return (
                    <div key={project.href} className={spacingClass}>
                      <ProjectCard
                        tag={project.tag}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        href={project.href}
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
