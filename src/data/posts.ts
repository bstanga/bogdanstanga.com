export interface Post {
  title: string;
  date: string; // Format: "Mar 20"
  year: number;
  slug: string;
}

export const posts: Post[] = [
  {
    title: "Using AI to Reduce Human Errors in Code Reviews",
    date: "Nov 18",
    year: 2024,
    slug: "ai-reviewers",
  },
];
