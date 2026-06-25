import ArticleExtras from "@/app/components/ArticleExtras";

export const metadata = {
  title: "Warum ich dachte, ich hätte alles im Griff",
  description:
    "Viele Menschen mit Alkoholproblemen glauben lange Zeit, die Kontrolle zu haben. Ich auch.",
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
          Warum ich dachte, ich hätte alles im Griff
        </h1>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Weil ich gearbeitet habe.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Weil ich Rechnungen bezahlt habe.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Weil ich morgens aufgestanden bin.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "50px" }}>
          Weil nach außen alles irgendwie funktioniert hat.
        </p>

        <h2 style={{ fontSize: "36px", marginBottom: "25px" }}>
          Die große Illusion
        </h2>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Viele Menschen glauben, Alkoholiker hätten ihr Leben nicht mehr im Griff.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Kein Job.
          Kein Geld.
          Keine Familie.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "50px" }}>
          Genau deshalb habe ich mich selbst nie in dieser Rolle gesehen.
        </p>

        <h2 style={{ fontSize: "36px", marginBottom: "25px" }}>
          Ich funktionierte
        </h2>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Ich arbeitete.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Ich machte Termine.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Ich erledigte Verpflichtungen.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "50px" }}>
          Und genau das wurde zu meinem größten Argument.
        </p>

        <h2 style={{ fontSize: "36px", marginBottom: "25px" }}>
          Die Ausreden
        </h2>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Ich kann jederzeit aufhören.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          So schlimm ist es nicht.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Andere trinken viel mehr.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "50px" }}>
          Ich habe mir alles erzählt. Nur nicht die Wahrheit.
        </p>

        <h2 style={{ fontSize: "36px", marginBottom: "25px" }}>
          Was ich nicht sehen wollte
        </h2>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Die eigentliche Frage war nie:
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Funktionierst du noch?
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Die eigentliche Frage war:
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "50px" }}>
          Warum brauchst du Alkohol überhaupt?
        </p>

        <h2 style={{ fontSize: "36px", marginBottom: "25px" }}>
          Die Wahrheit
        </h2>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Irgendwann wurde mir klar:
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Ich hatte Alkohol nicht im Griff.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Ich hatte lediglich gelernt, lange genug zu funktionieren.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "50px" }}>
          Das ist nicht dasselbe.
        </p>

        <h2 style={{ fontSize: "36px", marginBottom: "25px" }}>
          Die ehrliche Frage
        </h2>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Viele Menschen fragen:
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Bin ich alkoholabhängig?
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "40px" }}>
          Vielleicht gibt es eine bessere Frage.
        </p>

        <p style={{ fontSize: "20px", color: "#cfcfcf", marginBottom: "50px" }}>
          Würde es dir schwerfallen, heute Abend keinen Alkohol zu trinken?
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