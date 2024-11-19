interface HeadingProps {
  children: React.ReactNode;
}

interface TitleProps {
  children: React.ReactNode;
}

export function Title({ children }: TitleProps) {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
      {children}
    </h1>
  );
}

export function Heading({ children }: HeadingProps) {
  return (
    <h2 className="text-2xl font-bold mt-12 text-gray-900 dark:text-white">
      {children}
    </h2>
  );
}

export function SubHeading({ children }: HeadingProps) {
  return (
    <h3 className="text-xl font-bold mt-12 text-gray-900 dark:text-white">
      {children}
    </h3>
  );
}
