import ArticleExtras from "@/app/components/ArticleExtras";

export const metadata = {
  title: "10 Warnzeichen für Alkoholabhängigkeit",
  description:
    "Die ehrlichen Signale, die viele Menschen viel zu lange ignorieren.",
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
          10 Warnzeichen für Alkoholabhängigkeit
        </h1>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Alkoholabhängigkeit beginnt selten mit einem Zusammenbruch.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Oft beginnt sie viel früher.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Mit Dingen, die zunächst harmlos wirken.
        </p>

        <div style={{ display: "grid", gap: "18px", marginBottom: "50px", fontSize: "20px", color: "#d1d5db" }}>
          <p>1. Du denkst häufig an den nächsten Drink.</p>
          <p>2. Du rechtfertigst deinen Konsum vor dir selbst.</p>
          <p>3. Du nimmst dir vor weniger zu trinken und schaffst es nicht.</p>
          <p>4. Alkohol gehört fest zu deinem Alltag.</p>
          <p>5. Du brauchst Alkohol zum Abschalten.</p>
          <p>6. Du wirst nervös, wenn keiner verfügbar ist.</p>
          <p>7. Du verheimlichst die tatsächliche Menge.</p>
          <p>8. Du vergleichst dich ständig mit stärkeren Trinkern.</p>
          <p>9. Du suchst Ausreden für deinen Konsum.</p>
          <p>10. Der Gedanke ans Aufhören macht dir Angst.</p>
        </div>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Nicht jedes einzelne Zeichen bedeutet automatisch eine Abhängigkeit.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Doch je mehr Punkte auf dich zutreffen,
          desto ehrlicher solltest du hinschauen.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Die wichtigste Frage lautet oft nicht:
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          „Bin ich alkoholabhängig?“
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "50px" }}>
          Sondern:
          „Warum fällt es mir so schwer, ehrlich darüber nachzudenken?“
        </p>

        <ArticleExtras article="warnzeichen" />

      </article>
    </main >
  );
}