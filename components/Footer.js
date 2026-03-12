import { contactInfo } from '@/data/contact';

export default function Footer() {
  return (
    <footer className="w-full bg-black">
      <div className="w-full h-px bg-white mb-8"></div>
      <div className="flex items-center justify-between px-8 pb-8 max-w-7xl mx-auto">
        <p className="text-white text-sm">© 2026 Portfolio. All rights reserved.</p>
        <div className="flex gap-6">
          {/* GitHub Icon */}
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity inline-flex items-center justify-center flex-shrink-0"
            aria-label="GitHub"
          >
            <span
              className="w-5 h-5 bg-contain bg-center bg-no-repeat flex-shrink-0"
              role="img"
              aria-label="GitHub logo"
              style={{ backgroundImage: 'url(https://cdn.simpleicons.org/github/000000/ffffff)' }}
            />
          </a>
          {/* LinkedIn Icon */}
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity"
            aria-label="LinkedIn"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          {/* LeetCode Icon */}
          <a
            href={contactInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity inline-flex items-center justify-center flex-shrink-0"
            aria-label="LeetCode"
          >
            <span
              className="w-5 h-5 bg-contain bg-center bg-no-repeat flex-shrink-0"
              role="img"
              aria-label="LeetCode logo"
              style={{ backgroundImage: 'url(https://cdn.simpleicons.org/leetcode/000000/ffffff)' }}
            />
          </a>
          {/* Email Icon */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-white hover:opacity-80 transition-opacity"
            aria-label="Email"
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
