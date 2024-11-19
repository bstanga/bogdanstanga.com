import { ReactNode } from "react";
import { PostLayout } from "../PostLayout";

interface BlogPostProps {
  children: ReactNode;
}

export function BlogPost({ children }: BlogPostProps) {
  return (
    <PostLayout>
      <div className="space-y-6">{children}</div>
    </PostLayout>
  );
}
