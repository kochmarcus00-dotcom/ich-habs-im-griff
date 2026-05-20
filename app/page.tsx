export const metadata = {
  title: "Ich dachte, ich hab’s im Griff | Alkohol aufhören Buch",
  description:
    "Warum weniger trinken nicht funktioniert und wie du wirklich aufhörst. Ehrlich, direkt und ohne Bullshit.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function LandingPage() {
  return (
    <>
      <style>{`
        @keyframes breathe {
          0% { transform: scale(1); }
          50% { transform: scale(1.06); }
          100% { transform: scale(1); }
        }

        .breathing-button {
          animation: breathe 2.8s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>

      <>
      

      <main style={{
      minHeight: "100vh",
      backgroundColor: "#0B0B0B",
      color: "white",
      fontFamily: "Arial, sans-serif",
      lineHeight: 1.6
    }}>
      {/* SEO Hero Section */}
      <section style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 24px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "60px",
        alignItems: "center"
      }}>
        <div>
          <p style={{
            color: "#D68A1F",
            textTransform: "uppercase",
            letterSpacing: "3px",
            fontSize: "14px",
            marginBottom: "16px"
          }}>
            Marcus Koch
          </p>

          <h1 style={{
            fontSize: "clamp(42px, 7vw, 82px)",
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: "24px"
          }}>
            Ich dachte,<br />
            ich hab’s<br />
            im Griff.
          </h1>

          <h2 style={{
            fontSize: "clamp(20px, 3vw, 32px)",
            fontWeight: 400,
            color: "#d1d5db",
            marginBottom: "32px"
          }}>
            Bis Alkohol entschieden hat, dass er mich im Griff hat.
          </h2>

          <p style={{
            fontSize: "18px",
            color: "#cfcfcf",
            marginBottom: "32px",
            maxWidth: "600px"
          }}>
            Warum du nicht weniger trinken kannst — und wie du wirklich aufhörst. Kein Therapeut. Kein Experte. Jemand, der selbst dort war. Keine Theorie. Keine Ausreden. Nur die Wahrheit.
          </p>

          <a
            className="breathing-button"
            href="https://www.amazon.de/dp/B0GH8RX7W6" target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#D68A1F",
              color: "black",
              padding: "18px 34px",
              borderRadius: "16px",
              fontWeight: 700,
              fontSize: "18px",
              textDecoration: "none"
            }}
          >
            Ich will da raus
          </a>
        </div>

        <div>
          <img
            src="/book_cover.png"
            alt="Ich dachte ich hab's im Griff Buch über Alkohol aufhören von Marcus Koch"
            style={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)"
            }}
          />
        </div>
      </section>

      {/* SEO Problem Section */}
      <section style={{ backgroundColor: "#111111", padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "42px", marginBottom: "30px" }}>
            Warum weniger trinken nicht funktioniert
          </h2>

          <p style={{ fontSize: "24px", color: "#d1d5db", marginBottom: "18px" }}>
            „Heute trinke ich weniger.“
          </p>
          <p style={{ fontSize: "24px", color: "#d1d5db", marginBottom: "18px" }}>
            „Nur heute noch.“
          </p>
          <p style={{ fontSize: "24px", color: "#d1d5db", marginBottom: "30px" }}>
            „Ich hab’s im Griff.“
          </p>

          <p style={{ fontSize: "18px", color: "#bdbdbd" }}>
            Genau hier beginnt Alkoholabhängigkeit oft: nicht beim ersten Glas, sondern in dem Moment, in dem du glaubst, jederzeit aufhören zu können.
          </p>
        </div>
      </section>

      {/* Value Section */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "90px 24px" }}>
        <h2 style={{ fontSize: "42px", marginBottom: "30px" }}>
          Dieses Buch hilft dir wirklich
        </h2>

        <div style={{ display: "grid", gap: "18px", fontSize: "18px", color: "#d1d5db" }}>
          <p>• Alkohol kontrollieren funktioniert nicht, wenn du bereits zu weit bist</p>
          <p>• Du verstehst, wie Alkohol Kontrolle über deinen Alltag übernimmt</p>
          <p>• Du bekommst einen klaren 7-Tage-Startplan zum Aufhören</p>
          <p>• Du bekommst einen Notfallplan gegen Rückfall und Druck</p>
          <p>• Du lernst, wie dauerhafte Abstinenz wirklich funktioniert</p>
        </div>
      </section>

      {/* SEO excerpt */}
      <section style={{ backgroundColor: "#111111", padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "42px", marginBottom: "24px" }}>
            Buchauszug: Alkohol aufhören beginnt im Kopf
          </h2>

          <p style={{
            borderLeft: "4px solid #D68A1F",
            paddingLeft: "20px",
            fontSize: "20px",
            color: "#d1d5db"
          }}>
            Sobald ich das erste Glas in der Hand hatte, war noch alles ruhig. Aber nach dem ersten Schluck ging es nicht mehr darum, ob ich noch ein Glas trinke — sondern wann. Und wie schnell. Und wie viel.
          </p>
        </div>
      </section>

      {/* Social Proof Section */}
      <section style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "70px 24px 20px",
        textAlign: "center"
      }}>
        <p style={{
          color: "#D68A1F",
          fontSize: "14px",
          textTransform: "uppercase",
          letterSpacing: "3px",
          marginBottom: "16px"
        }}>
          Jetzt erhältlich
        </p>

        <h2 style={{ fontSize: "38px", marginBottom: "20px" }}>
          Nur als Kindle Edition verfügbar
        </h2>

        <p style={{
          fontSize: "18px",
          color: "#d1d5db",
          maxWidth: "700px",
          margin: "0 auto 28px"
        }}>
          Für Menschen, die ehrlich aufhören wollen — nicht morgen. Heute.
          Direkt auf Amazon erhältlich, sofort verfügbar und ohne leere Motivationssprüche.
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
          color: "#cfcfcf",
          fontSize: "17px"
        }}>
          <span>✓ Kindle Edition</span>
          <span>✓ Sofort verfügbar</span>
          <span>✓ Direkt auf Amazon erhältlich</span>
        </div>
      </section>

      {/* Author Section */}
      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "90px 24px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "50px",
        alignItems: "center"
      }}>
        <div>
          <img
            src="/mk1974.png"
            alt="Marcus Koch Autor Alkohol aufhören Buch"
            style={{
              width: "100%",
              borderRadius: "24px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.45)"
            }}
          />
        </div>

        <div>
          <p style={{
            color: "#D68A1F",
            textTransform: "uppercase",
            letterSpacing: "3px",
            fontSize: "14px",
            marginBottom: "12px"
          }}>
            Der Autor
          </p>

          <h2 style={{ fontSize: "42px", marginBottom: "20px" }}>
            Kein Therapeut. Kein Experte.
            <br />
            Jemand, der selbst dort war.
          </h2>

          <p style={{ fontSize: "18px", color: "#d1d5db", marginBottom: "18px" }}>
            Ich weiß, wie es ist, sich jeden Tag zu sagen:
            „Heute trinke ich weniger.“
          </p>

          <p style={{ fontSize: "18px", color: "#d1d5db", marginBottom: "18px" }}>
            Und ich weiß auch, warum das nicht funktioniert.
          </p>

          <p style={{ fontSize: "18px", color: "#d1d5db" }}>
            Dieses Buch ist kein theoretischer Ratgeber. Es ist die Wahrheit eines Menschen,
            der selbst fast daran zerbrochen wäre — und den Weg raus gefunden hat.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ backgroundColor: "#111111", padding: "90px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "42px", marginBottom: "40px", textAlign: "center" }}>
            Häufige Fragen zum Alkohol aufhören
          </h2>

          <div style={{ display: "grid", gap: "28px" }}>
            <div>
              <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
                Kann man wirklich kontrolliert trinken?
              </h3>
              <p style={{ color: "#cfcfcf", fontSize: "17px" }}>
                Wenn Alkohol bereits deinen Alltag bestimmt, ist kontrolliertes Trinken meistens nur eine weitere Lüge. Der einzige echte Weg ist Null.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
                Wie hilft dieses Buch beim Aufhören?
              </h3>
              <p style={{ color: "#cfcfcf", fontSize: "17px" }}>
                Es zeigt dir Realität statt Theorie: warum weniger trinken scheitert und wie du den Ausstieg praktisch schaffst.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
                Ist das Buch auch für Angehörige hilfreich?
              </h3>
              <p style={{ color: "#cfcfcf", fontSize: "17px" }}>
                Ja. Gerade Angehörige verstehen oft erst dadurch, warum Alkoholabhängigkeit nicht mit Willenskraft allein gelöst wird.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 999,
        width: "min(90%, 420px)",
        textAlign: "center"
      }}>
        <a
          className="breathing-button"
          href="https://www.amazon.de/dp/B0GH8RX7W6"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            backgroundColor: "#D68A1F",
            color: "black",
            padding: "18px 28px",
            borderRadius: "18px",
            fontWeight: 800,
            fontSize: "20px",
            textDecoration: "none",
            boxShadow: "0 12px 30px rgba(0,0,0,0.35)"
          }}
        >
          Ich will da raus
        </a>
      </div>

      {/* Final CTA */}
      <section id="kaufen" style={{ textAlign: "center", padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(40px, 6vw, 68px)", marginBottom: "24px" }}>
          Du musst nicht perfekt sein.<br />
          Du musst nur anfangen.
        </h2>

        <p style={{ fontSize: "28px", color: "#D68A1F", marginBottom: "32px" }}>
          Heute.
        </p>

        <a
          className="breathing-button"
          href="https://www.amazon.de/dp/B0GH8RX7W6" target="_blank" rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#D68A1F",
            color: "black",
            padding: "20px 40px",
            borderRadius: "16px",
            fontWeight: 800,
            fontSize: "20px",
            textDecoration: "none"
          }}
        >
          Jetzt auf Amazon kaufen
        </a>
      </section>
<footer
  style={{
    textAlign: "center",
    padding: "40px 20px",
    color: "#888",
    fontSize: "14px",
  }}
>
  <a
    href="/impressum"
    style={{
      color: "#888",
      marginRight: "20px",
      textDecoration: "none",
    }}
  >
    Impressum
  </a>

  <a
    href="/datenschutz"
    style={{
      color: "#888",
      textDecoration: "none",
    }}
  >
    Datenschutz
  </a>
</footer>

</main>
    </>
  );
}
