export const metadata = {
  title:
    "Alkohol aufhören Buch | Warum weniger trinken nicht funktioniert",

  description:
    "Alkohol aufhören ohne Rückfall. Warum kontrolliertes Trinken nicht funktioniert und wie du wirklich alkoholfrei wirst. Ehrlich, direkt und ohne Bullshit.",
};

export default function HomePage() {
  return (
    <>
      {/* FAQ SCHEMA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",

            mainEntity: [
              {
                "@type": "Question",
                name: "Wie hört man mit Alkohol auf?",

                acceptedAnswer: {
                  "@type": "Answer",

                  text:
                    "Der wichtigste Schritt ist Ehrlichkeit. Viele Menschen versuchen jahrelang kontrolliert zu trinken, obwohl genau das nicht mehr funktioniert.",
                },
              },

              {
                "@type": "Question",
                name: "Warum funktioniert weniger trinken nicht?",

                acceptedAnswer: {
                  "@type": "Answer",

                  text:
                    "Weil Alkoholabhängigkeit selten bei einem Glas bleibt. Der Kampf beginnt oft erst nach dem ersten Schluck.",
                },
              },

              {
                "@type": "Question",
                name: "Wie wird man alkoholfrei?",

                acceptedAnswer: {
                  "@type": "Answer",

                  text:
                    "Dauerhafte Abstinenz beginnt mit einer klaren Entscheidung — nicht mit Motivation.",
                },
              },
            ],
          }),
        }}
      />

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
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
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
              Alkohol aufhören Buch von Marcus Koch
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
              Warum weniger trinken nicht funktioniert —
              <br />
              und wie du wirklich alkoholfrei wirst.
            </h2>

            <p
              style={{
                fontSize: "18px",
                color: "#cfcfcf",
                marginBottom: "32px",
                maxWidth: "650px",
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
              Jetzt auf Amazon kaufen
            </a>
          </div>

          <div>
            <img
              src="/book_cover.png"
              alt="Alkohol aufhören Buch von Marcus Koch"
              style={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
              }}
            />
          </div>
        </section>

        {/* SEO SECTION */}

        <section
          style={{
            backgroundColor: "#111111",
            padding: "90px 24px",
          }}
        >
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontSize: "48px",
                marginBottom: "32px",
                textAlign: "center",
              }}
            >
              Warum Alkohol aufhören so schwer ist
            </h2>

            <p
              style={{
                fontSize: "20px",
                color: "#d1d5db",
                marginBottom: "24px",
              }}
            >
              Viele Menschen glauben, sie könnten Alkohol kontrollieren.
              Genau dort beginnt das Problem.
            </p>

            <p
              style={{
                fontSize: "20px",
                color: "#d1d5db",
                marginBottom: "24px",
              }}
            >
              Alkoholabhängigkeit entsteht oft schleichend:
              ein Glas am Abend,
              ein Drink zum Abschalten,
              ein Ritual gegen Stress.
            </p>

            <p
              style={{
                fontSize: "20px",
                color: "#d1d5db",
              }}
            >
              Irgendwann geht es nicht mehr um Genuss.
              Sondern nur noch darum,
              sich selbst kurz nicht fühlen zu müssen.
            </p>
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
              fontSize: "48px",
              marginBottom: "40px",
            }}
          >
            Dieses Buch hilft dir beim Alkohol aufhören
          </h2>

          <div
            style={{
              display: "grid",
              gap: "22px",
              fontSize: "20px",
              color: "#d1d5db",
            }}
          >
            <p>• warum kontrolliertes Trinken scheitert</p>

            <p>
              • warum Alkohol nie wirklich das eigentliche Problem war
            </p>

            <p>• wie Alkohol langsam Kontrolle übernimmt</p>

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
            backgroundColor: "#111111",
            padding: "100px 24px",
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "50px",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="/mk1974.png"
                alt="Marcus Koch Autor"
                style={{
                  width: "100%",
                  borderRadius: "24px",
                  boxShadow:
                    "0 20px 60px rgba(0,0,0,0.45)",
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
                  fontSize: "48px",
                  marginBottom: "24px",
                }}
              >
                Kein Therapeut.
                <br />
                Kein Experte.
                <br />
                Kein Mensch mit perfekten Antworten.
              </h2>

              <p
                style={{
                  fontSize: "20px",
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
            padding: "100px 24px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              marginBottom: "50px",
              textAlign: "center",
            }}
          >
            Häufige Fragen zum Alkohol aufhören
          </h2>

          <div
            style={{
              display: "grid",
              gap: "36px",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "28px",
                  marginBottom: "10px",
                }}
              >
                Wie hört man mit Alkohol auf?
              </h3>

              <p
                style={{
                  color: "#cfcfcf",
                  fontSize: "18px",
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
                  fontSize: "28px",
                  marginBottom: "10px",
                }}
              >
                Warum funktioniert weniger trinken nicht?
              </h3>

              <p
                style={{
                  color: "#cfcfcf",
                  fontSize: "18px",
                }}
              >
                Weil Alkoholabhängigkeit selten bei einem Glas bleibt.
                Der Kampf beginnt oft erst nach dem ersten Schluck.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "28px",
                  marginBottom: "10px",
                }}
              >
                Wie wird man alkoholfrei?
              </h3>

              <p
                style={{
                  color: "#cfcfcf",
                  fontSize: "18px",
                }}
              >
                Dauerhafte Abstinenz beginnt mit einer klaren Entscheidung —
                nicht mit Motivation.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "28px",
                  marginBottom: "10px",
                }}
              >
                Wann ist man alkoholabhängig?
              </h3>

              <p
                style={{
                  color: "#cfcfcf",
                  fontSize: "18px",
                }}
              >
                Wenn du ständig darüber nachdenkst,
                weniger zu trinken —
                und es trotzdem nicht wirklich schaffst.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "28px",
                  marginBottom: "10px",
                }}
              >
                Wie vermeidet man Rückfälle?
              </h3>

              <p
                style={{
                  color: "#cfcfcf",
                  fontSize: "18px",
                }}
              >
                Rückfälle vermeidet man nicht mit Disziplin —
                sondern mit neuen Gewohnheiten,
                Ehrlichkeit und klaren Entscheidungen.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}

        <section
          style={{
            textAlign: "center",
            padding: "120px 24px",
            backgroundColor: "#111111",
          }}
        >
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(42px, 6vw, 72px)",
                marginBottom: "24px",
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

            <p
              style={{
                fontSize: "30px",
                color: "#D68A1F",
                marginBottom: "40px",
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
                padding: "22px 44px",
                borderRadius: "18px",
                fontWeight: 800,
                fontSize: "22px",
                textDecoration: "none",
              }}
            >
              Jetzt auf Amazon kaufen
            </a>
          </div>
        </section>
      </main>
    </>
  );
}