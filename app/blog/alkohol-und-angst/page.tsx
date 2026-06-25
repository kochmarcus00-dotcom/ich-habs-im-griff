import ArticleExtras from "@/app/components/ArticleExtras";

export const metadata = {
  title: "Alkohol und Angst – Warum Alkohol Angst oft verstärkt",
  description:
    "Viele Menschen trinken gegen Angst und innere Unruhe. Doch Alkohol kann Angstgefühle langfristig verstärken.",
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
          Alkohol und Angst
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#d1d5db",
            marginBottom: "30px",
          }}
        >
          Viele Menschen trinken,
          um ihre Gedanken leiser zu machen.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Für einen Moment
          funktioniert das sogar.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "40px",
          }}
        >
          Die Sorgen werden kleiner.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Der Kopf wird ruhiger.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "40px",
          }}
        >
          Die Anspannung verschwindet.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Doch am nächsten Morgen
          sieht die Welt oft anders aus.
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
          <p>• innere Unruhe</p>
          <p>• Nervosität</p>
          <p>• Grübeln</p>
          <p>• Schuldgefühle</p>
          <p>• Anspannung</p>
        </div>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Viele kennen dieses Gefühl.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "40px",
          }}
        >
          Man wacht auf
          und fühlt sich plötzlich schlechter
          als am Abend zuvor.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Das Problem:
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "40px",
          }}
        >
          Viele greifen dann erneut
          zum Alkohol.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Nicht aus Genuss.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "40px",
          }}
        >
          Sondern um die Angst
          wieder loszuwerden.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Genau dort beginnt oft
          ein gefährlicher Kreislauf.
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
          <p>• Angst</p>
          <p>• Alkohol</p>
          <p>• kurze Erleichterung</p>
          <p>• stärkere Angst</p>
          <p>• noch mehr Alkohol</p>
        </div>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Viele erkennen diesen Zusammenhang
          erst sehr spät.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "50px",
          }}
        >
          Vielleicht bekämpfst du nicht die Angst.
          Vielleicht fütterst du sie.
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