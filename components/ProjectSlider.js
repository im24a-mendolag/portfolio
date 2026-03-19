'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';

export default function ProjectSlider({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const isScrolling = useRef(false);

  const scrollToIndex = useCallback((index) => {
    const container = scrollRef.current;
    if (!container) return;
    const slide = container.children[index];
    if (!slide) return;

    isScrolling.current = true;
    const containerCenter = container.offsetWidth / 2;
    const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
    container.scrollTo({ left: slideCenter - containerCenter, behavior: 'smooth' });

    setTimeout(() => {
      isScrolling.current = false;
    }, 500);
  }, []);

  const handleScroll = useCallback(() => {
    if (isScrolling.current) return;
    const container = scrollRef.current;
    if (!container) return;

    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    let closest = 0;
    let minDist = Infinity;

    Array.from(container.children).forEach((child, i) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(containerCenter - childCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });

    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const prev = () => {
    const newIndex = Math.max(0, activeIndex - 1);
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const next = () => {
    const newIndex = Math.min(projects.length - 1, activeIndex + 1);
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  if (!projects.length) {
    return <p className="text-gray-400">No featured projects available.</p>;
  }

  return (
    <div className="relative">
      {/* Slides container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 hide-scrollbar"
        style={{ scrollPaddingInline: '10%' }}
      >
        {projects.map((project, i) => (
          <Link
            key={project.href}
            href={project.href}
            className="snap-center shrink-0 w-[80%] group"
          >
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
          </Link>
        ))}
      </div>

      {/* Prev / Next arrows */}
      {projects.length > 1 && (
        <>
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            aria-label="Previous project"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-white/10 hover:bg-white/20 disabled:opacity-0 transition-all rounded-full p-2 backdrop-blur-sm"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            disabled={activeIndex === projects.length - 1}
            aria-label="Next project"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-white/10 hover:bg-white/20 disabled:opacity-0 transition-all rounded-full p-2 backdrop-blur-sm"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dot indicators */}
      {projects.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActiveIndex(i); scrollToIndex(i); }}
              aria-label={`Go to project ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
