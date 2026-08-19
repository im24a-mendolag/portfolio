import Link from 'next/link';
import ExperienceCard from '@/components/ExperienceCard';
import EducationCard from '@/components/EducationCard';
import { skills } from '@/data/technologies';
import TechnologyBadge from '@/components/TechnologyBadge';
import { experienceData } from '@/data/experience';
import { educationData } from '@/data/education';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-7xl mx-auto px-8 py-12">
        {/* Header Section */}
        <section className="mb-16">
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
        </section>

        {/* Bio Section */}
        <section className="mb-16">
          <div className="space-y-4 text-lg text-gray-300 max-w-3xl text-justify">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
              sit amet, ante. Donec eu libero sit amet quam egestas semper.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <TechnologyBadge key={skill} technologyName={skill} />
            ))}
          </div>
        </section>

        {/* Experience Section */}
        {experienceData.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <div className="space-y-6">
              {experienceData.map((exp, i) => (
                <ExperienceCard key={i} {...exp} />
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        {educationData.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <div className="space-y-6">
              {educationData.map((edu, i) => (
                <EducationCard key={i} {...edu} />
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="bg-white text-black px-6 py-3 font-medium hover:opacity-90 transition-opacity rounded-lg"
            >
              View My Projects
            </Link>
            <Link
              href="/contact"
              className="text-white underline underline-offset-4 hover:opacity-80 transition-opacity font-medium inline-flex items-center"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
