export function Footer() {
  return (
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
  );
}
