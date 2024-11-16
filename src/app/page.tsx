"use client";

import { Github, Linkedin, Sun, Moon } from "lucide-react";
import { XIcon } from "./components/XIcon";
import { useTheme } from "./hooks/useTheme";
import { useEffect, useState } from "react";
import { posts } from "./data/posts";

export default function Home() {
  const { isDark, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Group posts by year
  const postsByYear = posts.reduce((acc, post) => {
    if (!acc[post.year]) {
      acc[post.year] = [];
    }
    acc[post.year].push(post);
    return acc;
  }, {} as Record<number, typeof posts>);

  // Sort years in descending order
  const years = Object.keys(postsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  // Only show the toggle after mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="grid grid-rows-[1fr_auto] items-start justify-items-center min-h-screen p-8 sm:p-12 font-[family-name:var(--font-geist-sans)] transition-colors duration-200 bg-white dark:bg-black">
      {/* Only render button after mounting */}
      {mounted && (
        <button
          onClick={toggleTheme}
          className="fixed top-8 right-8 p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-5 h-5" strokeWidth={1.5} />
          ) : (
            <Moon className="w-5 h-5" strokeWidth={1.5} />
          )}
        </button>
      )}

      <main className="flex flex-col gap-8 w-full max-w-2xl pt-16 sm:pt-32">
        <section className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold sm:text-3xl text-gray-900 dark:text-white">
              Bogdan Stanga
            </h1>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed tracking-wide">
              Engineering leader on{" "}
              <a
                href="https://linkedin.com/in/bogdanstanga"
                className="text-gray-900 dark:text-white hover:opacity-70 transition-opacity font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Search
              </a>
              , building and scaling high-impact teams that operate at speed.
              <br />
              <br />
              Also building{" "}
              <a
                href="http://presubmit.ai"
                className="text-gray-900 dark:text-white hover:opacity-70 transition-opacity font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Presubmit.ai
              </a>
              , a collection of open-source, LLM-powered developer tools and
              advising startups on engineering strategy, team building, and
              technical architecture.
            </p>
          </div>

          <div className="flex gap-6 text-gray-600 dark:text-gray-400">
            <a
              href="https://x.com/bdstanga"
              className="hover:text-gray-900 dark:hover:text-white p-1 hover:scale-110 transition-all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Profile (formerly Twitter)"
            >
              <XIcon className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/bogdanstanga"
              className="hover:text-gray-900 dark:hover:text-white p-1 hover:scale-110 transition-all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" strokeWidth={1.5} />
            </a>
            <a
              href="https://github.com/bstanga"
              className="hover:text-gray-900 dark:hover:text-white p-1 hover:scale-110 transition-all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" strokeWidth={1.5} />
            </a>
          </div>

          {years.length > 0 && (
            <div className="space-y-12 pt-8">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white tracking-wide mb-6">
                  Writing
                </h2>

                {years.map((year) => (
                  <div key={year} className="mb-12 last:mb-0">
                    <h3 className="text-sm font-mono text-gray-500 mb-4">
                      {year}
                    </h3>
                    <ul className="space-y-5">
                      {postsByYear[year].map((post) => (
                        <li key={post.slug}>
                          <a
                            href={`/blog/${post.slug}`}
                            className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors block group"
                          >
                            <span className="text-gray-500 font-mono text-sm">
                              {post.date}
                            </span>
                            <p className="mt-1.5 text-base leading-relaxed tracking-wide font-light">
                              {post.title}
                            </p>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>

      <footer className="flex gap-2 flex-wrap items-center justify-center text-sm text-gray-500 py-8">
        <span>©</span>
        <span>{new Date().getFullYear()}</span>
        <span>·</span>
        <a
          href="https://bogdanstanga.com"
          className="hover:text-black dark:hover:text-white transition-colors track-wide"
          target="_blank"
          rel="noopener noreferrer"
        >
          bogdanstanga.com
        </a>
      </footer>
    </div>
  );
}
