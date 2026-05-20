export const metadata = {
  title: "30 Tage ohne Alkohol – Was wirklich passiert",
  description:
    "Was nach 30 Tagen ohne Alkohol körperlich und mental passiert – ehrlich und ohne Bullshit.",
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
          30 Tage ohne Alkohol
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#d1d5db",
            marginBottom: "30px",
          }}
        >
          Die meisten Menschen unterschätzen,
          wie stark Alkohol ihren Alltag beeinflusst.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Nach 30 Tagen ohne Alkohol verändert sich oft mehr
          als nur der Körper.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Viele schlafen besser.
          Die Gedanken werden klarer.
          Angst und innere Unruhe nehmen ab.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Und plötzlich merkt man:
          Alkohol war nie die Lösung.
          Sondern nur eine kurze Pause vor den echten Problemen.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "40px",
          }}
        >
          Genau deshalb scheitert kontrolliertes Trinken so oft:
          Weil man nicht nur gegen Alkohol kämpft —
          sondern gegen sich selbst.
        </p>

        <a
          href="https://www.amazon.de/dp/B0GH8RX7W6"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#D68A1F",
            color: "black",
            padding: "18px 32px",
            borderRadius: "16px",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Zum Buch auf Amazon
        </a>
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