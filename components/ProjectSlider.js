'use client';

import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';

function Slide({ project }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-md overflow-hidden h-full flex flex-col md:flex-row transition-colors duration-300 group-hover:border-white/25">
      {project.image ? (
        <div className="md:w-1/2 aspect-[16/10] md:aspect-auto overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="md:w-1/2 aspect-[16/10] md:aspect-auto bg-white/5 flex items-center justify-center">
          <span className="text-white/20 text-6xl font-bold">{project.title[0]}</span>
        </div>
      )}
      <div className="p-6 md:p-8 flex flex-col justify-center md:w-1/2">
        <span className="bg-white/10 text-white/80 text-xs font-medium px-2 py-1 rounded w-fit mb-4">
          {project.tag}
        </span>
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{project.description}</p>
        <span className="mt-6 text-white/40 text-sm group-hover:text-white/70 transition-colors inline-flex items-center gap-1">
          View project
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default function ProjectSlider({ projects }) {
  const len = projects.length;
  const offset = len > 1 ? 2 : 0;
  const [posIndex, setPosIndex] = useState(offset);
  const [animated, setAnimated] = useState(true);
  const lockRef = useRef(false);

  // [clone(N-2), clone(N-1), ...real..., clone(0), clone(1)]
  const slides = len > 1
    ? [projects.at(-2), projects.at(-1), ...projects, projects[0], projects[1 % len]]
    : [...projects];

  const realIndex = len > 1 ? ((posIndex - offset + len) % len) : 0;

  const settle = useCallback((nextPos) => {
    if (len <= 1) return;
    const jumpTo =
      nextPos <= offset - 1 ? nextPos + len :
      nextPos >= len + offset ? nextPos - len :
      null;

    setTimeout(() => {
      if (jumpTo !== null) {
        setAnimated(false);
        setPosIndex(jumpTo);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimated(true);
            lockRef.current = false;
          });
        });
      } else {
        lockRef.current = false;
      }
    }, 400);
  }, [len, offset]);

  const goToPos = useCallback((nextPos) => {
    if (lockRef.current) return;
    lockRef.current = true;
    setAnimated(true);
    setPosIndex(nextPos);
    settle(nextPos);
  }, [settle]);

  const prev = () => goToPos(posIndex - 1);
  const next = () => goToPos(posIndex + 1);
  const goTo = (i) => goToPos(i + offset);

  if (!len) {
    return <p className="text-gray-400">No featured projects available.</p>;
  }

  const translateX = `calc(-${posIndex} * (80% + 1.5rem) + 10%)`;

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex gap-6 ${animated ? 'transition-transform duration-400 ease-in-out' : ''}`}
        style={{ transform: `translateX(${translateX})` }}
      >
        {slides.map((project, i) => (
          <Link
            key={`slide-${i}`}
            href={project.href}
            className="shrink-0 w-[80%] group"
          >
            <Slide project={project} />
          </Link>
        ))}
      </div>

      {len > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous project"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 transition-all rounded-full p-2 backdrop-blur-sm"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next project"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 transition-all rounded-full p-2 backdrop-blur-sm"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {len > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === realIndex ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
