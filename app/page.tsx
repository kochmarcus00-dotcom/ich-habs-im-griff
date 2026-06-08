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
          overflowX: "hidden",
        }}
      >
        {/* HERO */}

        <section
          style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "40px 24px 120px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "70px",
            alignItems: "center",
          }}
        >
          {/* LEFT */}

          <div
            style={{
              width: "100%",
              minWidth: 0,
            }}
          >
            <h1
              style={{
                fontSize: "clamp(54px, 10vw, 100px)",
                lineHeight: 0.92,
                fontWeight: 900,
                marginBottom: "32px",
                wordBreak: "break-word",
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
                fontSize: "clamp(28px, 5vw, 46px)",
                lineHeight: 1.25,
                fontWeight: 400,
                color: "#f3f3f3",
                marginBottom: "36px",
                wordBreak: "break-word",
              }}
            >
              Warum weniger trinken nicht funktioniert —
              <br />
              und wie du wirklich alkoholfrei wirst.
            </h2>

            <p
              style={{
                fontSize: "clamp(19px, 2vw, 24px)",
                lineHeight: 1.9,
                color: "#d0d0d0",
                maxWidth: "720px",
                marginBottom: "40px",
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
                padding: "22px 40px",
                borderRadius: "18px",
                fontSize: "22px",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              Jetzt auf Amazon kaufen
            </a>
          </div>

          {/* RIGHT */}

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "620px",
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "32px",
                  objectFit: "contain",
                  boxShadow:
                    "0 25px 90px rgba(0,0,0,0.7)",
                }}
              >
                <source
                  src="/glass-loop.mp4"
                  type="video/mp4"
                />
              </video>

              {/* AUTHOR IMAGE */}

              <img
                src="/mk1974.png"
                alt="Marcus Koch"
                style={{
                  position: "absolute",
                  bottom: "-35px",
                  right: "-10px",
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "26px",
                  border: "4px solid #111",
                  boxShadow:
                    "0 12px 40px rgba(0,0,0,0.6)",
                }}
              />
            </div>
          </div>
        </section>

        {/* VALUE */}

        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "100px 24px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(40px, 6vw, 60px)",
              lineHeight: 1.1,
              marginBottom: "50px",
            }}
          >
            Dieses Buch hilft dir beim Alkohol aufhören
          </h2>

          <div
            style={{
              display: "grid",
              gap: "24px",
              fontSize: "clamp(20px, 2vw, 26px)",
              lineHeight: 1.6,
              color: "#d1d5db",
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
            padding: "120px 24px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "70px",
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
                  display: "block",
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
                  marginBottom: "18px",
                }}

<div
  style={{
    marginTop: "40px",
  }}
>
  <a
    href="/ueber-marcus-koch"
    style={{
      display: "inline-block",
      backgroundColor: "#D68A1F",
      color: "black",
      padding: "16px 28px",
      borderRadius: "14px",
      textDecoration: "none",
      fontWeight: 700,
      fontSize: "18px",
    }}
  >
    Mehr über Marcus Koch →
  </a>
</div>
              >
                Der Autor
              </p>

              <h2
                style={{
                  fontSize: "clamp(38px, 7vw, 64px)",
                  lineHeight: 1.08,
                  marginBottom: "30px",
                  wordBreak: "break-word",
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
                  fontSize: "clamp(20px, 2vw, 26px)",
                  lineHeight: 1.8,
                  color: "#d1d5db",
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
            padding: "120px 24px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(40px, 6vw, 60px)",
              textAlign: "center",
              marginBottom: "70px",
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
                  fontSize: "clamp(28px, 5vw, 36px)",
                  marginBottom: "16px",
                }}
              >
                Wie hört man mit Alkohol auf?
              </h3>

              <p
                style={{
                  color: "#cfcfcf",
                  fontSize: "clamp(20px, 2vw, 24px)",
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
                  fontSize: "clamp(28px, 5vw, 36px)",
                  marginBottom: "16px",
                }}
              >
                Warum funktioniert weniger trinken nicht?
              </h3>

              <p
                style={{
                  color: "#cfcfcf",
                  fontSize: "clamp(20px, 2vw, 24px)",
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
                  fontSize: "clamp(28px, 5vw, 36px)",
                  marginBottom: "16px",
                }}
              >
                Wann ist man alkoholabhängig?
              </h3>

              <p
                style={{
                  color: "#cfcfcf",
                  fontSize: "clamp(20px, 2vw, 24px)",
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
            backgroundColor: "#0d0d0d",
            padding: "140px 24px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(44px, 8vw, 90px)",
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
              padding: "24px 52px",
              borderRadius: "20px",
              fontSize: "24px",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Jetzt auf Amazon kaufen
          </a>
        </section>

        {/* FOOTER */}

        <footer
          style={{
            padding: "40px 24px",
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
<a
  href="/ueber-marcus-koch"
  style={{
    color: "#cfcfcf",
    textDecoration: "none",
    fontSize: "18px",
  }}
>
  Über Marcus Koch
</a>
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