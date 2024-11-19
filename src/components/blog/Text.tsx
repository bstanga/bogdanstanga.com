interface TextProps {
  children: React.ReactNode;
}

export function Text({ children }: TextProps) {
  return <p className="text-gray-700 dark:text-gray-300">{children}</p>;
}
