import ArticleExtras from "@/app/components/ArticleExtras";

export const metadata = {
  title: "Feierabendbier jeden Tag",
  description:
    "Wann eine Gewohnheit beginnt und warum viele Menschen sie unterschätzen.",
};

export default function ArticlePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0B0B0B",
        color: "white",
        padding: "80px 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <article
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "58px",
            marginBottom: "30px",
          }}
        >
          Feierabendbier jeden Tag </h1>

        <p style={{ fontSize: "22px", color: "#d1d5db", marginBottom: "30px" }}>
          Viele Menschen trinken nicht auf Partys.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "24px" }}>
          Nicht im Urlaub.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "24px" }}>
          Nicht am Wochenende.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Sondern jeden Abend.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "24px" }}>
          Ein Bier nach der Arbeit.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "24px" }}>
          Ein Glas Wein auf dem Sofa.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Nichts Besonderes.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "24px" }}>
          Zumindest fühlt es sich so an.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Genau deshalb wird das Feierabendbier oft nicht hinterfragt.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "24px" }}>
          Es gehört einfach dazu.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "24px" }}>
          Der Arbeitstag ist vorbei.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "24px" }}>
          Man möchte abschalten.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Den Stress loswerden.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Und Alkohol scheint dabei zu helfen.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "24px" }}>
          Doch mit der Zeit verändert sich etwas.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "24px" }}>
          Aus einer Entscheidung wird eine Gewohnheit.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "24px" }}>
          Aus einer Gewohnheit wird eine Erwartung.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Und irgendwann stellt sich nicht mehr die Frage:
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          "Trinke ich heute?"
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Sondern:
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          "Warum sollte ich heute nicht trinken?"
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Vielleicht ist das Feierabendbier keine Belohnung mehr.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "50px" }}>
          Vielleicht ist es längst zur Gewohnheit geworden.
        </p>

        <ArticleExtras article="warnzeichen" />
        <div
          style={{
            marginTop: "60px",
            paddingTop: "30px",
            borderTop: "1px solid #222",
          }}
        >
          <a
            href="/blog"
            style={{
              display: "inline-block",
              color: "#D68A1F",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            ← Zurück zum Blog
          </a>
        </div>
      </article>
    </main>

  );
}
