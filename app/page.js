import Link from 'next/link';
import { primarySkills, otherSkills } from '@/data/technologies';
import { projectData } from '@/data/projects';
import TechnologyBadge from '@/components/TechnologyBadge';
import ProjectSlider from '@/components/ProjectSlider';
import AnimatedSection from '@/components/AnimatedSection';
import ExperienceCard from '@/components/ExperienceCard';
import EducationCard from '@/components/EducationCard';
import { experienceData } from '@/data/experience';
import { educationData } from '@/data/education';

export default function Home() {
  const featuredProjects = Object.entries(projectData)
    .filter(([slug, project]) => project.featured)
    .map(([slug, project]) => ({
      tag: project.tag,
      title: project.title,
      description: project.description,
      image: project.image,
      href: `/projects/${slug}`,
    }));

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-7xl mx-auto px-8 py-6">
        {/* Hero Section */}
        <section className="relative py-8 md:py-16 mb-8 animate-fade-slide-up">
          {/* Decorative glow */}
          <div className="absolute -top-16 left-0 right-0 h-64 bg-white/5 blur-3xl pointer-events-none" />

          <h2 className="relative text-6xl md:text-7xl font-bold mb-4 bg-linear-to-r from-white to-white/50 bg-clip-text text-transparent">
            Hi, I&apos;m Giovanni Mendola
          </h2>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl">
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
              className="text-white underline underline-offset-4 hover:opacity-80 transition-opacity font-medium inline-flex items-center"
            >
              Contact Me
            </Link>
          </div>
        </section>

        {/* Featured Projects Slider */}
        <AnimatedSection variant="fadeUp">
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8">Featured Projects</h2>
            <ProjectSlider projects={featuredProjects} />
          </section>
        </AnimatedSection>

        {/* Primary Skills */}
        <AnimatedSection variant="fadeUp" delay={100}>
          <section className="mb-10">
            <h2 className="text-4xl font-bold mb-2">Skills &amp; Technologies</h2>
            <p className="text-gray-400 mb-8">Technologies I work with the most</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {primarySkills.map((skill) => (
                <TechnologyBadge key={skill} technologyName={skill} size="lg" />
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Other Technologies */}
        <AnimatedSection variant="fadeUp" delay={150}>
          <section className="mb-16">
            <h3 className="text-xl font-semibold text-white/60 mb-4">Other Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {otherSkills.map((skill) => (
                <TechnologyBadge key={skill} technologyName={skill} />
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Experience */}
        {experienceData.length > 0 && (
          <AnimatedSection variant="fadeUp">
            <section className="mb-16">
              <h2 className="text-4xl font-bold mb-8">Experience</h2>
              <div className="space-y-6">
                {experienceData.map((exp, i) => (
                  <ExperienceCard key={i} {...exp} />
                ))}
              </div>
            </section>
          </AnimatedSection>
        )}

        {/* Education */}
        {educationData.length > 0 && (
          <AnimatedSection variant="fadeUp">
            <section className="mb-16">
              <h2 className="text-4xl font-bold mb-8">Education</h2>
              <div className="space-y-6">
                {educationData.map((edu, i) => (
                  <EducationCard key={i} {...edu} />
                ))}
              </div>
            </section>
          </AnimatedSection>
        )}
      </main>
    </div>
  );
}
