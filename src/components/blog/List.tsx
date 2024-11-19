interface ListProps {
  ordered?: boolean;
  children: React.ReactNode;
}

export function List({ ordered = false, children }: ListProps) {
  const Tag = ordered ? "ol" : "ul";
  const listStyle = ordered ? "list-decimal" : "list-disc";

  return (
    <Tag
      className={`${listStyle} pl-6 space-y-2 text-gray-700 dark:text-gray-300`}
    >
      {children}
    </Tag>
  );
}

export function ListItem({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}
