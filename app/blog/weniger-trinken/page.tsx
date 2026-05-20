export const metadata = {
  title: "Warum weniger trinken nicht funktioniert",
  description:
    "Warum kontrolliertes Trinken oft scheitert und Alkoholabhängigkeit schleichend entsteht.",
};

export default function ArticlePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0B0B0B",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "80px 24px",
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
          Warum weniger trinken nicht funktioniert
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#d1d5db",
            marginBottom: "30px",
          }}
        >
          Die meisten Menschen mit Alkoholproblemen sagen denselben Satz:
          „Ich trinke einfach weniger.“
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Genau hier beginnt oft die größte Selbstlüge.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Denn Alkoholabhängigkeit bedeutet selten,
          dass jemand morgens Wodka trinkt.
          Viel häufiger beginnt sie leise:
          mit Routinen,
          Gewohnheiten
          und dem ständigen Gedanken,
          jederzeit aufhören zu können.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Irgendwann geht es nicht mehr darum,
          ob man trinken will.
          Sondern nur noch darum,
          wie lange man es ohne Alkohol aushält.
        </p>

        <a
          href="https://www.amazon.de/dp/B0GH8RX7W6"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "40px",
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