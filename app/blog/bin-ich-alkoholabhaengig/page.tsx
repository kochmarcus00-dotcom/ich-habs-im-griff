export const metadata = {
  title: "Bin ich alkoholabhängig? Die ehrlichsten Warnzeichen",
  description:
    "Die wichtigsten Warnzeichen für Alkoholabhängigkeit – ehrlich, direkt und ohne Ausreden.",
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
          Bin ich alkoholabhängig?
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#d1d5db",
            marginBottom: "30px",
          }}
        >
          Die meisten Menschen mit Alkoholproblemen
          erkennen sich selbst lange nicht.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Alkoholabhängigkeit beginnt selten dramatisch.
          Oft beginnt sie leise:
          mit Routinen,
          Gewohnheiten
          und Ausreden.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Warnzeichen sind zum Beispiel:
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
          <p>• Du denkst oft an Alkohol</p>
          <p>• Du willst weniger trinken — schaffst es aber nicht</p>
          <p>• Alkohol gehört fest zu deinem Alltag</p>
          <p>• Du trinkst gegen Stress oder Gefühle</p>
          <p>• Du rechtfertigst deinen Konsum ständig</p>
        </div>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "40px",
          }}
        >
          Die gefährlichste Lüge ist nicht:
          „Ich trinke zu viel.“
          Sondern:
          „Ich könnte jederzeit aufhören.“
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
      </article>
    </main>
  );
}