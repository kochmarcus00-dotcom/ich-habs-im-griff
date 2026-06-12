export const metadata = {
  title: "Alkohol und Depression",
  description:
    "Warum Alkohol depressive Gedanken nicht löst, sondern oft verstärkt.",
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
          Alkohol und Depression
        </h1>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Viele Menschen trinken nicht, weil sie feiern wollen.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Sie trinken, weil sie für einen Moment ihre Gedanken ausschalten möchten.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Stress.
          Einsamkeit.
          Sorgen.
          Traurigkeit.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Alkohol wirkt zunächst wie eine Lösung.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "50px" }}>
          Genau darin liegt das Problem.
        </p>

        <h2 style={{ fontSize: "36px", marginBottom: "25px" }}>
          Die kurzfristige Erleichterung
        </h2>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Nach dem ersten Glas fühlt sich vieles leichter an.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Gedanken werden leiser.
          Gefühle werden gedämpft.
          Probleme wirken weiter entfernt.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "50px" }}>
          Für kurze Zeit scheint alles besser zu werden.
        </p>

        <h2 style={{ fontSize: "36px", marginBottom: "25px" }}>
          Der Absturz danach
        </h2>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Was viele nicht wissen:
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Alkohol beeinflusst dieselben Botenstoffe,
          die für Stimmung, Motivation und Antrieb verantwortlich sind.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Deshalb fühlen sich viele Menschen am nächsten Tag schlechter als vorher.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "50px" }}>
          Nicht nur körperlich.
          Auch psychisch.
        </p>

        <h2 style={{ fontSize: "36px", marginBottom: "25px" }}>
          Der gefährliche Kreislauf
        </h2>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Man fühlt sich schlecht.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Man trinkt.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Man fühlt sich kurzfristig besser.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Danach fühlt man sich noch schlechter.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "50px" }}>
          Also trinkt man erneut.
        </p>

        <h2 style={{ fontSize: "36px", marginBottom: "25px" }}>
          Was viele verwechseln
        </h2>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Viele glauben,
          Alkohol helfe gegen Depressionen.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Tatsächlich verschiebt er die Gefühle oft nur auf später.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "50px" }}>
          Und wenn sie zurückkommen,
          kommen sie häufig stärker zurück.
        </p>

        <h2 style={{ fontSize: "36px", marginBottom: "25px" }}>
          Die ehrliche Frage
        </h2>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Vielleicht geht es gar nicht um Alkohol.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Vielleicht geht es um die Frage,
          warum du ihn brauchst.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "50px" }}>
          Genau dort beginnt oft die eigentliche Veränderung.
        </p>

        <a
          href="https://www.amazon.de/dp/B0FH6T3V4K"
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