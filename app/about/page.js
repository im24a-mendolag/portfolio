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
              I'm a passionate full-stack developer with a love for creating beautiful, 
              functional web applications. I enjoy working with modern technologies and 
              building solutions that make a difference.
            </p>
            <p>
              My journey in web development started with a curiosity about how websites 
              work, and it has evolved into a career focused on creating exceptional user 
              experiences through clean code and thoughtful design.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community.
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
