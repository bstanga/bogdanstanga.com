import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        <div className="flex items-center mb-6 sm:mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to home</span>
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6">
        <article className="prose dark:prose-invert prose-quoteless prose-neutral max-w-none">
          <div className="max-w-full">{children}</div>
        </article>
      </main>
    </div>
  );
}
