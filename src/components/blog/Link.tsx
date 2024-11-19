interface LinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export function Link({ href, children, external = false }: LinkProps) {
  const externalProps = external
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <a
      href={href}
      className="text-gray-900 dark:text-white hover:opacity-70 transition-opacity font-semibold"
      {...externalProps}
    >
      {children}
    </a>
  );
}
