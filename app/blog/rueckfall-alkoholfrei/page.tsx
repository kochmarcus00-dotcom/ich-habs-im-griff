import ArticleExtras from "@/app/components/ArticleExtras";

export const metadata = {
  title: "Rückfall nach Monaten alkoholfrei – Warum ein Rückfall nicht das Ende ist",
  description:
    "Viele Menschen erleben einen Rückfall nach Monaten ohne Alkohol. Warum das passieren kann und warum es nicht bedeutet, versagt zu haben.",
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
          Rückfall nach Monaten alkoholfrei
        </h1>

        <p style={{ fontSize: "22px", color: "#d1d5db", marginBottom: "30px" }}>
          Monate ohne Alkohol.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "24px" }}>
          Vielleicht sogar ein Jahr.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Und dann passiert es trotzdem.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "24px" }}>
          Ein Abend.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "24px" }}>
          Ein Glas.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Ein Rückfall.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "24px" }}>
          Viele Menschen glauben dann,
          alles sei verloren.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Doch das stimmt nicht.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "24px" }}>
          Ein Rückfall macht die Monate davor
          nicht wertlos.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "24px" }}>
          Er löscht keine Fortschritte.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "50px" }}>
          Entscheidend ist,
          was du danach tust.
        </p>

        <ArticleExtras article="warnzeichen" />
      </article>
    </main>
  );
}