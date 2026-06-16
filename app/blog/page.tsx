export const metadata = {
  title: "Blog | Alkohol aufhören und alkoholfrei leben",
  description:
    "Artikel über Alkohol aufhören, alkoholfrei leben, Rückfälle, Alkoholabhängigkeit und nüchtern werden.",
};

export default function BlogPage() {
  const posts = [
    {
      title: "Warum weniger trinken nicht funktioniert",
      slug: "weniger-trinken",
      excerpt:
        "Die gefährlichste Lüge beim Alkoholproblem ist der Gedanke, man hätte alles unter Kontrolle.",
    },
    {
      title: "30 Tage ohne Alkohol",
      slug: "30-tage-ohne-alkohol",
      excerpt:
        "Was wirklich passiert, wenn du 30 Tage keinen Alkohol trinkst.",
    },
    {
      title: "Bin ich alkoholabhängig?",
      slug: "bin-ich-alkoholabhaengig",
      excerpt:
        "Die ehrlichsten Warnzeichen, die fast niemand wahrhaben will.",
    },

{
  title: "Alkohol und Beziehung",
  slug: "alkohol-und-beziehung",
  excerpt:
    "Wenn Alkohol zwischen zwei Menschen steht und Vertrauen langsam verloren geht.",
},

{
  title: "Alkohol und Schlaf",
  slug: "alkohol-und-schlaf",
  excerpt:
    "Warum Alkohol müde macht, aber vielen Menschen trotzdem den Schlaf raubt.",
},

{
  title: "Alkohol und Angst",
  slug: "alkohol-und-angst",
  excerpt:
    "Warum Alkohol kurzfristig beruhigt, Angst langfristig aber oft verstärkt.",
},

{
  title: "Alkohol und Arbeit",
  slug: "alkohol-und-arbeit",
  excerpt:
    "Warum Funktionieren im Alltag nicht bedeutet, dass alles in Ordnung ist.",
},

{
  title: "Rückfall nach Monaten alkoholfrei",
  slug: "rueckfall-alkoholfrei",
  excerpt:
    "Warum ein Rückfall nicht bedeutet, dass alle Fortschritte verloren sind.",
},

{
  slug: "funktionierender-alkoholiker",
  title: "Funktionierender Alkoholiker",
  excerpt:
    "Warum Job, Familie und Alltag nicht beweisen, dass alles in Ordnung ist.",
},

{
  slug: "10-warnzeichen-alkoholabhaengigkeit",
  title: "10 Warnzeichen für Alkoholabhängigkeit",
  excerpt:
    "Die ehrlichen Signale, die viele Menschen viel zu lange ignorieren.",
},

{
  slug: "feierabendbier-jeden-tag",
  title: "Feierabendbier jeden Tag",
  excerpt:
    "Wann eine Gewohnheit beginnt und warum viele Menschen sie unterschätzen.",
},

{
  slug: "alkohol-und-langeweile",
  title: "Alkohol und Langeweile",
  excerpt:
    "Warum viele Menschen nicht wegen Alkohol trinken, sondern wegen der Leere dazwischen.",
},

{
  title: "Alkohol und Depression",
  slug: "alkohol-und-depression",
  excerpt:
    "Warum Alkohol depressive Gedanken nicht löst, sondern oft verstärkt.",
},

{
  title: "Alkohol und Einsamkeit",
  slug: "alkohol-und-einsamkeit",
  excerpt:
    "Warum Einsamkeit einer der häufigsten Gründe für regelmäßigen Alkoholkonsum ist.",
},

{
  title: "Warum ich dachte, ich hätte alles im Griff",
  slug: "ich-dachte-ich-haette-alles-im-griff",
  excerpt:
    "Viele Menschen mit Alkoholproblemen glauben lange Zeit, die Kontrolle zu haben. Ich auch.",
},

{
  title: "Alkohol und Scham",
  slug: "alkohol-und-scham",
  excerpt:
    "Warum Scham und Alkohol oft in einem gefährlichen Kreislauf miteinander verbunden sind.",
},

{
  slug: "ich-trinke-nur-am-wochenende",
  title: "Ich trinke nur am Wochenende",
  excerpt:
    "Warum ein Alkoholproblem nicht davon abhängt, an wie vielen Tagen du trinkst.",
},
{
  slug: "kontrolliertes-trinken",
  title: "Warum kontrolliertes Trinken oft scheitert",
  excerpt:
    "Warum viele Menschen jahrelang versuchen, weniger zu trinken – statt ehrlich aufzuhören.",
},
{
  slug: "warum-alkoholprobleme-lange-unsichtbar-bleiben",
  title: "Warum Alkoholprobleme lange unsichtbar bleiben",
  excerpt:
    "Die meisten Alkoholprobleme beginnen nicht mit einem Absturz. Genau deshalb werden sie oft übersehen.",
},
{
  slug: "warum-der-gedanke-ans-aufhoeren-angst-macht",
  title: "Warum der Gedanke ans Aufhören Angst macht",
  excerpt:
    "Viele Menschen haben weniger Angst vor Alkohol als vor einem Leben ohne ihn.",
},

  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0B0B0B",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "80px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            marginBottom: "20px",
          }}
        >
          Blog
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#cfcfcf",
            marginBottom: "60px",
          }}
        >
          Ehrliche Artikel über Alkohol, Rückfälle,
          Alkoholabhängigkeit und den Weg in ein alkoholfreies Leben.
        </p>

        <div
          style={{
            display: "grid",
            gap: "28px",
          }}
        >
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                display: "block",
                padding: "30px",
                backgroundColor: "#111111",
                borderRadius: "18px",
                textDecoration: "none",
                color: "white",
              }}
            >
              <h2
                style={{
                  fontSize: "32px",
                  marginBottom: "12px",
                }}
              >
                {post.title}
              </h2>

              <p
                style={{
                  color: "#cfcfcf",
                  fontSize: "18px",
                }}
              >
                {post.excerpt}
              </p>
            </a>
          ))}
        </div>
      </div>
<div
  style={{
    textAlign: "center",
    marginTop: "80px",
  }}
>
  <a
    href="/"
    style={{
      display: "inline-block",
      color: "#D68A1F",
      textDecoration: "none",
      fontWeight: 700,
      fontSize: "20px",
    }}
  >
    ← Zurück zur Hauptseite
  </a>
</div>
    </main>
  );
}