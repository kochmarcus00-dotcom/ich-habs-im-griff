import ArticleExtras from "@/app/components/ArticleExtras";

export const metadata = {
  title: "Alkohol und Arbeit – Funktionieren bedeutet nicht gesund sein",
  description:
    "Viele Menschen glauben, sie hätten kein Alkoholproblem, weil sie arbeiten. Doch Funktionieren ist nicht dasselbe wie gesund sein.",
};

export default function ArticlePage() {
  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#0B0B0B",
      color: "white",
      padding: "80px 24px",
      fontFamily: "Arial, sans-serif",
    }}>
      <article style={{
        maxWidth: "800px",
        margin: "0 auto",
      }}>
        <h1 style={{
          fontSize: "58px",
          marginBottom: "30px",
        }}>
          Alkohol und Arbeit
        </h1>

        <p style={{ fontSize: "22px", color: "#d1d5db", marginBottom: "30px" }}>
          Viele Menschen glauben,
          sie hätten kein Alkoholproblem.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "24px" }}>
          Schließlich gehen sie arbeiten.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Jeden Tag.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "24px" }}>
          Sie stehen auf.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "24px" }}>
          Sie funktionieren.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Und genau das macht Alkohol so gefährlich.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "24px" }}>
          Denn Funktionieren
          bedeutet nicht automatisch,
          dass alles in Ordnung ist.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Viele merken erst spät,
          wie viel Energie Alkohol kostet.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "50px" }}>
          Manchmal ist Arbeit kein Beweis dafür,
          dass man alles im Griff hat.
        </p>

        <ArticleExtras article="warnzeichen" />
      </article>
    </main>
  );
}