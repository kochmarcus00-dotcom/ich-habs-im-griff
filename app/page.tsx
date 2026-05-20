export const metadata = {
  title:
    "Alkohol aufhören Buch | Warum weniger trinken nicht funktioniert",
  description:
    "Alkohol aufhören ohne Rückfall. Warum kontrolliertes Trinken nicht funktioniert und wie du wirklich nüchtern wirst. Ehrlich, direkt und ohne Bullshit.",
  keywords: [
    "Alkohol aufhören",
    "alkoholfrei leben",
    "Alkoholabhängigkeit",
    "trocken werden",
    "nüchtern werden",
    "kontrolliert trinken",
    "Alkoholproblem",
    "Rückfall vermeiden",
    "Alkohol Buch",
    "Sucht überwinden",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ich dachte, ich hab’s im Griff",
    description:
      "Warum weniger trinken nicht funktioniert und wie du wirklich aufhörst.",
    images: ["/book_cover.png"],
  },
};

export default function LandingPage() {
  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes breathe {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .breathing-button {
          animation: breathe 2.8s ease-in-out infinite;
        }

        a:hover {
          opacity: 0.9;
        }
      `}</style>

      {/* BOOK SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: "Ich dachte, ich hab’s im Griff",
            author: {
              "@type": "Person",
              name: "Marcus Koch",
            },
            description:
              "Warum weniger trinken nicht funktioniert und wie du wirklich aufhörst.",
            inLanguage: "de",
          }),
        }}
      />

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
                  text: "Der wichtigste Schritt ist zu akzeptieren, dass kontrolliertes Trinken oft nicht mehr funktioniert.",
                },
              },
              {
                "@type": "Question",
                name: "Warum funktioniert weniger trinken nicht?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Weil Alkoholabhängigkeit selten bei einem Glas bleibt.",
                },
              },
              {
                "@type": "Question",
                name: "Wie wird man alkoholfrei?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Durch Ehrlichkeit, klare Entscheidungen und dauerhafte Veränderung.",
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
              Dieses Buch zeigt dir, warum kontrolliertes Trinken scheitert,
              wie Alkoholabhängigkeit entsteht und wie du wirklich nüchtern
              wirst — ohne Bullshit und ohne leere Motivationssprüche.
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
            <p>• Warum kontrolliert trinken meistens scheitert</p>
            <p>• Wie Alkohol Kontrolle über deinen Alltag übernimmt</p>
            <p>• Wie du alkoholfrei leben kannst</p>
            <p>• Wie du Rückfälle vermeidest</p>
            <p>• Wie du dauerhaft nüchtern wirst</p>
            <p>• Warum Willenskraft allein nicht reicht</p>
            <p>• Wie Alkoholabhängigkeit wirklich funktioniert</p>
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
                  fontSize: "48px",
                  marginBottom: "24px",
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
                  fontSize: "20px",
                  color: "#d1d5db",
                  marginBottom: "20px",
                }}
              >
                Dieses Buch über Alkohol aufhören ist keine Theorie.
              </p>

              <p
                style={{
                  fontSize: "20px",
                  color: "#d1d5db",
                }}
              >
                Es ist die Wahrheit eines Menschen,
                der selbst fast an Alkohol zerbrochen wäre —
                und verstanden hat,
                warum weniger trinken niemals funktioniert hat.
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
              <h3 style={{ fontSize: "28px", marginBottom: "10px" }}>
                Wie hört man mit Alkohol auf?
              </h3>

              <p style={{ color: "#cfcfcf", fontSize: "18px" }}>
                Der wichtigste Schritt ist Ehrlichkeit.
                Viele Menschen versuchen jahrelang kontrolliert zu trinken,
                obwohl genau das nicht mehr funktioniert.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: "28px", marginBottom: "10px" }}>
                Warum funktioniert weniger trinken nicht?
              </h3>

              <p style={{ color: "#cfcfcf", fontSize: "18px" }}>
                Weil Alkoholabhängigkeit selten bei einem Glas bleibt.
                Der Kampf beginnt oft erst nach dem ersten Schluck.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: "28px", marginBottom: "10px" }}>
                Wie wird man alkoholfrei?
              </h3>

              <p style={{ color: "#cfcfcf", fontSize: "18px" }}>
                Dauerhafte Abstinenz beginnt mit einer klaren Entscheidung —
                nicht mit Motivation.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: "28px", marginBottom: "10px" }}>
                Wann ist man alkoholabhängig?
              </h3>

              <p style={{ color: "#cfcfcf", fontSize: "18px" }}>
                Wenn Alkohol deinen Alltag kontrolliert,
                deine Gedanken bestimmt
                oder du ständig versuchst weniger zu trinken.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: "28px", marginBottom: "10px" }}>
                Wie vermeidet man Rückfälle?
              </h3>

              <p style={{ color: "#cfcfcf", fontSize: "18px" }}>
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
              Du musst nicht perfekt sein.
              <br />
              Du musst nur anfangen.
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
<section
  style={{
    textAlign: "center",
    padding: "80px 24px",
    backgroundColor: "#111111",
  }}
>
  <h2
    style={{
      fontSize: "42px",
      marginBottom: "20px",
    }}
  >
    Mehr zum Thema Alkohol aufhören
  </h2>

  <p
    style={{
      fontSize: "20px",
      color: "#cfcfcf",
      marginBottom: "30px",
      maxWidth: "700px",
      marginInline: "auto",
    }}
  >
    Ehrliche Artikel über Alkoholabhängigkeit,
    Rückfälle, alkoholfrei leben
    und warum kontrolliertes Trinken oft scheitert.
  </p>

  <a
    href="/blog"
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
    Zum Blog
  </a>
</section>
        {/* FOOTER */}
        <footer
          style={{
            textAlign: "center",
            padding: "50px 20px",
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
      </main>
    </>
  );
}