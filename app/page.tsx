export const metadata = {
  title:
    "Alkohol aufhören Buch | Warum weniger trinken nicht funktioniert",

  description:
    "Alkohol aufhören ohne Rückfall. Warum kontrolliertes Trinken nicht funktioniert und wie du wirklich alkoholfrei wirst.",
};

export default function HomePage() {
  return (
    <>
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#050505",
          color: "white",
          fontFamily: "Arial, sans-serif",
          overflow: "hidden",
        }}
      >
        {/* HERO */}

        <section
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "80px 40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* LEFT */}

          <div>
            <h1
              style={{
                fontSize:
  typeof window !== "undefined" &&
  window.innerWidth < 900
    ? "64px"
    : "clamp(42px, 6vw, 82px)",
                lineHeight: 0.95,
                fontWeight: 900,
                marginBottom: "40px",
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
                fontSize: "clamp(24px, 3vw, 42px)",
                fontWeight: 400,
                lineHeight: 1.3,
                color: "#e5e5e5",
                marginBottom: "40px",
              }}
            >
              Warum weniger trinken nicht funktioniert —
              <br />
              und wie du wirklich alkoholfrei wirst.
            </h2>

            <p
              style={{
                fontSize: "22px",
                lineHeight: 1.8,
                color: "#cfcfcf",
                maxWidth: "760px",
                marginBottom: "50px",
              }}
            >
              Alkohol aufhören beginnt nicht mit Motivation.
              Sondern mit Ehrlichkeit.
              <br />
              <br />
              Dieses Buch zeigt dir,
              warum kontrolliertes Trinken scheitert,
              warum Alkoholabhängigkeit schleichend entsteht
              und warum weniger trinken irgendwann nicht mehr funktioniert.
              <br />
              <br />
              Ohne Bullshit.
              <br />
              Ohne Motivationsgelaber.
              <br />
              Sondern ehrlich.
            </p>

            <a
              href="https://www.amazon.de/dp/B0GH8RX7W6"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#D68A1F",
                color: "black",
                padding: "22px 42px",
                borderRadius: "18px",
                fontSize: "22px",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              Jetzt auf Amazon kaufen
            </a>
          </div>

          {/* RIGHT VIDEO */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <video
  autoPlay
  muted
  loop
  playsInline
  style={{
    width:
  typeof window !== "undefined" &&
  window.innerWidth < 900
    ? "100%"
    : "92%",
    maxWidth: "720px",
    height: "auto",
    objectFit: "contain",
    borderRadius: "28px",
    boxShadow: "0 20px 80px rgba(0,0,0,0.65)",
    transform:
  typeof window !== "undefined" &&
  window.innerWidth < 900
    ? "translateY(0px)"
    : "translateY(55px)",
    margin: "0 auto",
  }}
>
  <source
    src="/glass-loop.mp4"
    type="video/mp4"
  />
</video>
          </div>
        </section>

        {/* VALUE */}

        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "120px 40px",
          }}
        >
          <h2
            style={{
              fontSize: "58px",
              marginBottom: "50px",
            }}
          >
            Dieses Buch hilft dir beim Alkohol aufhören
          </h2>

          <div
            style={{
              display: "grid",
              gap: "28px",
              fontSize: "24px",
              color: "#d1d5db",
              lineHeight: 1.6,
            }}
          >
            <p>• warum kontrolliertes Trinken scheitert</p>

            <p>
              • warum Alkohol nie wirklich das eigentliche Problem war
            </p>

            <p>
              • wie Alkohol langsam Kontrolle übernimmt
            </p>

            <p>
              • warum Rückfälle nicht aus Schwäche entstehen
            </p>

            <p>
              • weshalb Willenskraft allein selten reicht
            </p>

            <p>
              • wie Ehrlichkeit wichtiger wird als Motivation
            </p>

            <p>
              • und warum echte Freiheit erst beginnt,
              wenn du aufhörst,
              dich selbst zu verlassen
            </p>
          </div>
        </section>

        {/* AUTHOR */}

        <section
          style={{
            backgroundColor: "#0d0d0d",
            padding: "120px 40px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns:
  typeof window !== "undefined" &&
  window.innerWidth < 900
    ? "1fr"
    : "1fr 1fr",
              gap: "70px",
              alignItems: "start",
            }}
          >
            <div>
              <img
                src="/mk1974.png"
                alt="Marcus Koch"
                style={{
                 width: "92%",
                  borderRadius: "24px",
                }}
              />
            </div>

            <div>
              <p
                style={{
                  color: "#D68A1F",
                  textTransform: "uppercase",
                  letterSpacing: "4px",
                  fontSize: "15px",
                  marginBottom: "16px",
                }}
              >
                Der Autor
              </p>

              <h2
                style={{
                  fontSize: "58px",
                  lineHeight: 1.1,
                  marginBottom: "30px",
                }}
              >
                Kein Therapeut.
                <br />
                Kein Experte.
                <br />
                Kein Mensch
                <br />
                mit perfekten Antworten.
              </h2>

              <p
                style={{
                  fontSize: "24px",
                  color: "#d1d5db",
                  lineHeight: 1.8,
                }}
              >
                Sondern jemand,
                der selbst jahrelang geglaubt hat,
                alles im Griff zu haben.
                <br />
                <br />
                Dieses Buch ist keine Theorie.
                <br />
                <br />
                Sondern die ehrliche Geschichte eines Menschen,
                der verstanden hat,
                warum weniger trinken niemals die Lösung war.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "120px 40px",
          }}
        >
          <h2
            style={{
              fontSize: "58px",
              marginBottom: "70px",
              textAlign: "center",
            }}
          >
            Häufige Fragen
          </h2>

          <div
            style={{
              display: "grid",
              gap: "50px",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "34px",
                  marginBottom: "16px",
                }}
              >
                Wie hört man mit Alkohol auf?
              </h3>

              <p
                style={{
                  color: "#cfcfcf",
                  fontSize:
  typeof window !== "undefined" &&
  window.innerWidth < 900
    ? "18px"
    : "22px",
                  lineHeight: 1.7,
                }}
              >
                Der wichtigste Schritt ist Ehrlichkeit.
                Viele Menschen versuchen jahrelang kontrolliert
                zu trinken,
                obwohl genau das nicht mehr funktioniert.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "34px",
                  marginBottom: "16px",
                }}
              >
                Warum funktioniert weniger trinken nicht?
              </h3>

              <p
                style={{
                  color: "#cfcfcf",
                  fontSize: "22px",
                  lineHeight: 1.7,
                }}
              >
                Weil Alkoholabhängigkeit selten bei einem Glas bleibt.
                Der Kampf beginnt oft erst nach dem ersten Schluck.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "34px",
                  marginBottom: "16px",
                }}
              >
                Wann ist man alkoholabhängig?
              </h3>

              <p
                style={{
                  color: "#cfcfcf",
                  fontSize: "22px",
                  lineHeight: 1.7,
                }}
              >
                Wenn du ständig darüber nachdenkst,
                weniger zu trinken —
                und es trotzdem nicht wirklich schaffst.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}

        <section
          style={{
            textAlign: "center",
            padding: "140px 40px",
            backgroundColor: "#0d0d0d",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(52px, 7vw, 92px)",
              lineHeight: 1.1,
              marginBottom: "40px",
            }}
          >
            Freiheit beginnt oft
            <br />
            in dem Moment,
            <br />
            in dem du aufhörst,
            <br />
            dich selbst zu belügen.
          </h2>

          <a
            href="https://www.amazon.de/dp/B0GH8RX7W6"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#D68A1F",
              color: "black",
              padding: "24px 50px",
              borderRadius: "20px",
              fontSize: "24px",
              fontWeight: 800,
              textDecoration: "none",
              marginTop: "30px",
            }}
          >
            Jetzt auf Amazon kaufen
          </a>
        </section>

        {/* FOOTER */}

        <footer
          style={{
            padding: "40px",
            borderTop: "1px solid #1f1f1f",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/blog"
              style={{
                color: "#cfcfcf",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              Blog
            </a>

            <a
              href="/impressum"
              style={{
                color: "#cfcfcf",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              Impressum
            </a>

            <a
              href="/datenschutz"
              style={{
                color: "#cfcfcf",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              Datenschutz
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}