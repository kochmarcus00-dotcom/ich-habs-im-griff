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

      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#0B0B0B",
          color: "white",
          fontFamily: "Arial, sans-serif",
          lineHeight: 1.6,
        }}
      >
        {/* HERO */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "80px 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "#D68A1F",
                textTransform: "uppercase",
                letterSpacing: "3px",
                fontSize: "14px",
                marginBottom: "16px",
              }}
            >
              Marcus Koch
            </p>

            <h1
              style={{
                fontSize: "clamp(42px, 7vw, 82px)",
                fontWeight: 900,
                lineHeight: 1.05,
                marginBottom: "24px",
              }}
            >
              Ich dachte,
              <br />
              ich hab’s
              <br />
              im Griff.
            </h1>

            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 32px)",
                fontWeight: 400,
                color: "#d1d5db",
                marginBottom: "32px",
              }}
            >
              Bis Alkohol entschieden hat, dass er mich im Griff hat.
            </h2>

            <p
              style={{
                fontSize: "18px",
                color: "#cfcfcf",
                marginBottom: "32px",
                maxWidth: "600px",
              }}
            >
              Warum du nicht weniger trinken kannst — und wie du wirklich
              aufhörst. Kein Therapeut. Kein Experte. Jemand, der selbst dort
              war. Keine Theorie. Keine Ausreden. Nur die Wahrheit.
            </p>

            <a
              className="breathing-button"
              href="https://www.amazon.de/dp/B0GH8RX7W6"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#D68A1F",
                color: "black",
                padding: "18px 34px",
                borderRadius: "16px",
                fontWeight: 700,
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Ich will da raus
            </a>
          </div>

          <div>
            <img
              src="/book_cover.png"
              alt="Buchcover"
              style={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              }}
            />
          </div>
        </section>

        {/* PROBLEM */}
        <section
          style={{
            backgroundColor: "#111111",
            padding: "80px 24px",
          }}
        >
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "42px",
                marginBottom: "30px",
              }}
            >
              Warum weniger trinken nicht funktioniert
            </h2>

            <p
              style={{
                fontSize: "24px",
                color: "#d1d5db",
                marginBottom: "18px",
              }}
            >
              „Heute trinke ich weniger.“
            </p>

            <p
              style={{
                fontSize: "24px",
                color: "#d1d5db",
                marginBottom: "18px",
              }}
            >
              „Nur heute noch.“
            </p>

            <p
              style={{
                fontSize: "24px",
                color: "#d1d5db",
                marginBottom: "30px",
              }}
            >
              „Ich hab’s im Griff.“
            </p>

            <p
              style={{
                fontSize: "18px",
                color: "#bdbdbd",
              }}
            >
              Genau hier beginnt Alkoholabhängigkeit oft: nicht beim ersten
              Glas, sondern in dem Moment, in dem du glaubst, jederzeit
              aufhören zu können.
            </p>
          </div>
        </section>

        {/* VALUE */}
        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "90px 24px",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "30px",
            }}
          >
            Dieses Buch hilft dir wirklich
          </h2>

          <div
            style={{
              display: "grid",
              gap: "18px",
              fontSize: "18px",
              color: "#d1d5db",
            }}
          >
            <p>• Alkohol kontrollieren funktioniert nicht</p>
            <p>• Du verstehst deine Trigger</p>
            <p>• Klarer 7-Tage-Startplan</p>
            <p>• Notfallplan gegen Rückfälle</p>
            <p>• Dauerhafte Abstinenz verstehen</p>
          </div>
        </section>

        {/* AUTHOR */}
        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "90px 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "50px",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src="/mk1974.png"
              alt="Marcus Koch"
              style={{
                width: "100%",
                borderRadius: "24px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
              }}
            />
          </div>

          <div>
            <p
              style={{
                color: "#D68A1F",
                textTransform: "uppercase",
                letterSpacing: "3px",
                fontSize: "14px",
                marginBottom: "12px",
              }}
            >
              Der Autor
            </p>

            <h2
              style={{
                fontSize: "42px",
                marginBottom: "20px",
              }}
            >
              Kein Therapeut.
              <br />
              Kein Experte.
              <br />
              Jemand, der selbst dort war.
            </h2>

            <p
              style={{
                fontSize: "18px",
                color: "#d1d5db",
              }}
            >
              Dieses Buch ist keine Theorie. Es ist die Wahrheit eines
              Menschen, der selbst fast daran zerbrochen wäre.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          id="kaufen"
          style={{
            textAlign: "center",
            padding: "100px 24px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(40px, 6vw, 68px)",
              marginBottom: "24px",
            }}
          >
            Du musst nicht perfekt sein.
            <br />
            Du musst nur anfangen.
          </h2>

          <p
            style={{
              fontSize: "28px",
              color: "#D68A1F",
              marginBottom: "32px",
            }}
          >
            Heute.
          </p>

          <a
            className="breathing-button"
            href="https://www.amazon.de/dp/B0GH8RX7W6"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#D68A1F",
              color: "black",
              padding: "20px 40px",
              borderRadius: "16px",
              fontWeight: 800,
              fontSize: "20px",
              textDecoration: "none",
            }}
          >
            Jetzt auf Amazon kaufen
          </a>
        </section>

        {/* FOOTER SPACING */}
        <div style={{ height: "120px" }} />

        {/* FOOTER */}
        <footer
          style={{
            textAlign: "center",
            padding: "40px 20px 80px",
            color: "#888",
            fontSize: "14px",
            borderTop: "1px solid #1f1f1f",
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

        {/* STICKY BUTTON */}
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 999,
            width: "min(90%, 420px)",
            textAlign: "center",
          }}
        >
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
              boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
            }}
          >
            Ich will da raus
          </a>
        </div>
      </main>
    </>
  );
}