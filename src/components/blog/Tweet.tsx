"use client";

import { useEffect, useRef, useState } from "react";

export function Tweet({ id }: { id: string }) {
  const tweetRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "100px" }
    );

    if (tweetRef.current) {
      observer.observe(tweetRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;

    // Load Twitter widget lazily
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [isIntersecting]);

  return (
    <div className="flex justify-center my-4" ref={tweetRef}>
      <div className="w-full max-w-[550px]">
        {isIntersecting ? (
          <div className="min-h-[350px]">
            <blockquote className="twitter-tweet" data-theme="dark">
              <a
                href={`https://twitter.com/x/status/${id}`}
                className="hidden"
              />
            </blockquote>
          </div>
        ) : (
          <div className="w-full h-[350px] bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
        )}
      </div>
    </div>
  );
}
