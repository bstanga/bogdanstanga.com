export interface Post {
  title: string;
  date: string; // Format: "Mar 20"
  year: number;
  slug: string;
}

export const posts: Post[] = [
  {
    title: "AI in Code Reviews: Reducing Human Errors and Enhancing Security",
    date: "Nov 17",
    year: 2024,
    slug: "ai-reviewers",
  },
];
