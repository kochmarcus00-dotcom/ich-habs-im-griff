export const metadata = {
  title: "30 Tage ohne Alkohol – Was wirklich passiert",
  description:
    "Was passiert nach 30 Tagen ohne Alkohol? Ehrlich, direkt und ohne Schönreden.",
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
          Die meisten Menschen glauben,
          dass sich nach 30 Tagen ohne Alkohol
          alles magisch verändert.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Die Wahrheit ist:
          Die ersten Tage sind oft schwerer
          als erwartet.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Viele kämpfen mit:
        </p>

        <div
          style={{
            display: "grid",
            gap: "14px",
            marginBottom: "30px",
            color: "#d1d5db",
            fontSize: "20px",
          }}
        >
          <p>• Unruhe</p>
          <p>• Schlafproblemen</p>
          <p>• Stimmungsschwankungen</p>
          <p>• Gewohnheiten, die plötzlich fehlen</p>
          <p>• Gedanken an Alkohol</p>
        </div>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Doch nach einigen Wochen
          berichten viele Menschen von:
        </p>

        <div
          style={{
            display: "grid",
            gap: "14px",
            marginBottom: "30px",
            color: "#d1d5db",
            fontSize: "20px",
          }}
        >
          <p>• Besserem Schlaf</p>
          <p>• Mehr Energie</p>
          <p>• Klareren Gedanken</p>
          <p>• Weniger Schuldgefühlen</p>
          <p>• Mehr Kontrolle über das eigene Leben</p>
        </div>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Aber die größte Veränderung
          findet nicht im Körper statt.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "40px",
          }}
        >
          Sondern im Kopf.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "40px",
          }}
        >
          Zum ersten Mal merkst du,
          wie oft Alkohol zuvor
          Entscheidungen,
          Gefühle
          und Gewohnheiten bestimmt hat.
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