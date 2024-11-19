import { ArticleSchema } from "@/lib/schema";

export const posts: ArticleSchema[] = [
  {
    title: "AI in Code Reviews: Reducing Human Errors and Enhancing Security",
    description:
      "Learn how AI-powered code reviews can catch security vulnerabilities, prevent bugs, and complement human reviewers. Real examples of how LLMs detect malicious code, API key leaks, and common anti-patterns in pull requests.",
    slug: "ai-reviewers",
    publishedTime: "2024-11-19T12:00:00.000Z",
    modifiedTime: "2024-11-19T12:00:00.000Z",
    tags: [
      "AI",
      "Code Review",
      "Security",
      "Developer Tools",
      "LLM code review",
      "AI code reviewer",
    ],
    wordCount: "1500",
    timeRequired: "PT8M",
  },
];

// Helper functions for date formatting
export function getYear(publishedTime: string): number {
  return new Date(publishedTime).getFullYear();
}

export function formatDate(publishedTime: string): string {
  return new Date(publishedTime).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
