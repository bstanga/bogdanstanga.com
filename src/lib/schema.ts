export interface ArticleSchema {
  title: string;
  description: string;
  slug: string;
  publishedTime: string;
  modifiedTime: string;
  tags: string[];
  wordCount: string;
  timeRequired: string;
  image: string;
}

export function generateArticleJsonLd({
  title,
  description,
  slug,
  publishedTime,
  modifiedTime,
  tags,
  wordCount,
  timeRequired,
  image,
}: ArticleSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description: description,
    image: image,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    author: {
      "@type": "Person",
      name: "Bogdan Stanga",
      url: "https://bogdanstanga.com",
      jobTitle: "Tech Lead",
      image: image,
      sameAs: [
        "https://twitter.com/bdstanga",
        "https://github.com/bstanga",
        "https://www.linkedin.com/in/bogdanstanga",
      ],
    },
    publisher: {
      "@type": "Person",
      name: "Bogdan Stanga",
      url: "https://bogdanstanga.com",
    },
    url: `https://bogdanstanga.com/${slug}`,
    isAccessibleForFree: true,
    keywords: tags,
    articleSection: "Software Development",
    wordCount: wordCount,
    timeRequired: timeRequired,
    inLanguage: "en-US",
    license: "https://creativecommons.org/licenses/by/4.0/",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bogdanstanga.com/${slug}`,
    },
  };
}

export function generateBlogJsonLd(articles: ArticleSchema[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Bogdan Stanga's Blog",
    description: "Articles about software engineering, leadership, and AI",
    url: "https://bogdanstanga.com",
    author: {
      "@type": "Person",
      name: "Bogdan Stanga",
      url: "https://bogdanstanga.com",
    },
    blogPost: articles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: article.description,
      datePublished: article.publishedTime,
      dateModified: article.modifiedTime,
      url: `https://bogdanstanga.com/${article.slug}`,
      image: article.image,
      author: {
        "@type": "Person",
        name: "Bogdan Stanga",
        url: "https://bogdanstanga.com",
        jobTitle: "Tech Lead",
        image: article.image,
        sameAs: [
          "https://twitter.com/bdstanga",
          "https://github.com/bstanga",
          "https://www.linkedin.com/in/bogdanstanga",
        ],
      },
    })),
  };
}
