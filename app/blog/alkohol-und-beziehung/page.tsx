export const metadata = {
  title: "Alkohol und Beziehung – Wenn Alkohol zwischen zwei Menschen steht",
  description:
    "Wie Alkohol Beziehungen verändert, Vertrauen zerstört und warum Ehrlichkeit oft der erste Schritt zur Veränderung ist.",
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
          Alkohol und Beziehung
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#d1d5db",
            marginBottom: "30px",
          }}
        >
          Viele Beziehungen scheitern nicht
          an fehlender Liebe.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Sondern an Dingen,
          die nie ausgesprochen werden.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          An Enttäuschungen.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "40px",
          }}
        >
          An gebrochenen Versprechen.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Oft beginnt alles harmlos.
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
          <p>• Ein Bier nach der Arbeit</p>
          <p>• Ein Glas Wein am Abend</p>
          <p>• Ein paar Drinks am Wochenende</p>
          <p>• Nur zum Entspannen</p>
        </div>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Doch irgendwann verändert sich etwas.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "40px",
          }}
        >
          Nicht plötzlich.
          Sondern langsam.
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
          <p>• Gespräche werden kürzer</p>
          <p>• Streitigkeiten häufiger</p>
          <p>• Vertrauen kleiner</p>
          <p>• Nähe verschwindet</p>
        </div>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Der Partner merkt oft früher,
          dass etwas nicht stimmt.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "40px",
          }}
        >
          Der Trinkende meistens zuletzt.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Das Schwierigste ist nicht der Alkohol.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Das Schwierigste sind die Lügen,
          die man sich selbst erzählt.
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
          <p>• Ich habe alles im Griff</p>
          <p>• Ich kann jederzeit aufhören</p>
          <p>• So schlimm ist es nicht</p>
          <p>• Alle anderen trinken doch auch</p>
        </div>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Beziehungen leben von Ehrlichkeit.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "40px",
          }}
        >
          Alkohol liebt Ausreden.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Viele Menschen verlieren nicht zuerst
          ihre Gesundheit.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Nicht ihren Job.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "40px",
          }}
        >
          Sondern das Vertrauen der Menschen,
          die sie lieben.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "40px",
          }}
        >
          Vielleicht erkennst du dich
          in diesen Gedanken wieder.
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