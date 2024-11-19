export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const getUrlWithRef = (url: string) => {
    try {
      const urlObj = new URL(url);
      urlObj.searchParams.set("ref", "bogdanstanga.com");
      return urlObj.toString();
    } catch {
      return url;
    }
  };

  return (
    <a
      href={getUrlWithRef(href)}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 dark:text-blue-400 hover:underline"
    >
      {children}
    </a>
  );
}
