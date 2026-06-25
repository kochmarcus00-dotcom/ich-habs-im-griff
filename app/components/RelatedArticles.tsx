import { articles } from "@/app/data/articles";

interface RelatedArticlesProps {
  currentArticle: keyof typeof articles;
}

export default function RelatedArticles({
  currentArticle,
}: RelatedArticlesProps) {
  const current = articles[currentArticle];

  const recommendations = Object.values(articles)
    .filter((article) => article.slug !== current.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <section
      style={{
        marginTop: "70px",
        padding: "40px",
        borderRadius: "18px",
        backgroundColor: "#111111",
        border: "1px solid #2a2a2a",
      }}
    >
      <h2
        style={{
          fontSize: "34px",
          marginBottom: "30px",
          color: "white",
        }}
      >
        📚 Das könnte dich ebenfalls interessieren
      </h2>

      <div
        style={{
          display: "grid",
          gap: "18px",
        }}
      >
        {recommendations.map((article) => (
          <a
            key={article.slug}
            href={`/blog/${article.slug}`}
            style={{
              display: "block",
              padding: "18px 22px",
              borderRadius: "12px",
              backgroundColor: "#181818",
              border: "1px solid #2a2a2a",
              color: "white",
              textDecoration: "none",
              fontSize: "19px",
              fontWeight: 600,
            }}
          >
            → {article.title}
          </a>
        ))}
      </div>
    </section>
  );
}