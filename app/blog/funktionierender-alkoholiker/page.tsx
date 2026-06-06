export const metadata = {
  title: "Funktionierender Alkoholiker – Wenn alles normal aussieht",
  description:
    "Warum Job, Familie und Alltag nicht beweisen, dass alles in Ordnung ist.",
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
          Funktionierender Alkoholiker
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#d1d5db",
            marginBottom: "30px",
          }}
        >
          Viele Menschen stellen sich einen Alkoholiker falsch vor.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Kein Job.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Kein Geld.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "40px",
          }}
        >
          Kein geregeltes Leben.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Doch viele Menschen mit einem Alkoholproblem funktionieren.
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
          <p>• Sie gehen zur Arbeit</p>
          <p>• Sie kümmern sich um ihre Familie</p>
          <p>• Sie bezahlen ihre Rechnungen</p>
          <p>• Sie wirken völlig normal</p>
        </div>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Genau deshalb erkennen viele ihr Problem nicht.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "40px",
          }}
        >
          Weil sie sich mit anderen vergleichen.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Solange alles läuft, scheint alles in Ordnung zu sein.
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
          <p>• Ich habe doch einen Job</p>
          <p>• Ich verpasse keine Termine</p>
          <p>• Ich habe mein Leben im Griff</p>
          <p>• So schlimm kann es nicht sein</p>
        </div>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Doch Alkoholabhängigkeit beginnt nicht erst, wenn alles zusammenbricht.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "40px",
          }}
        >
          Oft beginnt sie viel früher.
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
          <p>• Wenn Alkohol ständig im Kopf ist</p>
          <p>• Wenn Entspannung ohne Alkohol schwerfällt</p>
          <p>• Wenn Ausreden immer leichter werden</p>
          <p>• Wenn Aufhören Angst macht</p>
        </div>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Viele sogenannte funktionierende Alkoholiker leben jahrelang in diesem Zustand.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "24px",
          }}
        >
          Sie funktionieren.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "40px",
          }}
        >
          Aber sie sind nicht frei.
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "40px",
          }}
        >
          Vielleicht ist die wichtigste Frage nicht:
          "Funktioniere ich noch?"
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "40px",
          }}
        >
          Sondern:
          "Warum brauche ich Alkohol überhaupt?"
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