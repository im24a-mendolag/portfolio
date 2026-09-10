import Link from 'next/link';
import ExperienceCard from '@/components/ExperienceCard';
import EducationCard from '@/components/EducationCard';
import { skillCategories } from '@/data/technologies';
import TechnologyBadge from '@/components/TechnologyBadge';
import { experienceData } from '@/data/experience';
import { educationData } from '@/data/education';
import CertificateCard from '@/components/CertificateCard';
import { certificateData } from '@/data/certificates';
import SteamGames from '@/components/SteamGames';

// Toggle to show/hide the Steam "Off the Clock" section
const SHOW_STEAM = false;

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
              I&apos;m Giovanni Mendola, a student at the Informatikmittelschule of the
              Kantonsschule Hottingen in Zürich. I grew up in Lugano and now live in Adliswil,
              and I&apos;ve been building web applications since long before school asked me to.
            </p>
            <p>
              My favourite way to learn is to ship something real. GradePoints started as a
              spreadsheet I was tired of maintaining and turned into a full-stack app that Swiss
              vocational students actually use to track their grades. The interesting part was on
              the backend: modelling two different school grading systems in PostgreSQL with Prisma,
              getting weighted averages and pass/fail rules right, and securing it all with
              JWT-based authentication and email verification. School gave me the foundations in
              databases and programming, and projects like that one are where I turned them into
              things people actually use.
            </p>
            <p>
              I work mostly on the backend with JavaScript, TypeScript and Python: PostgreSQL and
              Prisma for data, JWT authentication, and REST APIs built with Next.js and Spring Boot.
              React and Tailwind are there when a project needs a frontend too. I speak
              Italian natively, German and English fluently, and some French. Away from the
              keyboard you&apos;ll find me swimming, reading, or playing guitar.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Skills &amp; Expertise</h2>
          <div className="space-y-8">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {category.skills.map((skill) => (
                    <TechnologyBadge key={skill} technologyName={skill} />
                  ))}
                </div>
              </div>
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

        {/* Certificates Section */}
        {certificateData.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Certificates</h2>
            <div className="space-y-6">
              {certificateData.map((certificate, i) => (
                <CertificateCard key={i} {...certificate} />
              ))}
            </div>
          </section>
        )}

        {/* Off the Clock Section */}
        {SHOW_STEAM && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Off the Clock</h2>
            <div className="max-w-md">
              <SteamGames />
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
