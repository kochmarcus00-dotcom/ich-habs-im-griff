import ArticleExtras from "@/app/components/ArticleExtras";

export const metadata = {
    title: "Warum viele Menschen erst spät ehrlich werden",
    description:
        "Nicht der Alkohol ist oft das größte Problem, sondern die Geschichten, die wir uns darüber erzählen.",
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
                    Warum viele Menschen erst spät ehrlich werden
                </h1>

                <p
                    style={{
                        fontSize: "22px",
                        color: "#d1d5db",
                        marginBottom: "30px",
                    }}
                >
                    Die meisten Menschen wissen lange vor dem Aufhören,
                    dass etwas nicht stimmt.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Ich wusste es auch.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Nicht jeden Tag.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Aber immer wieder.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    In den ruhigen Momenten.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    In den Momenten nach dem Trinken.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    In den Momenten,
                    in denen plötzlich niemand mehr da war,
                    vor dem ich mich erklären musste.
                </p>

                <div
                    style={{
                        display: "grid",
                        gap: "14px",
                        marginBottom: "40px",
                        color: "#d1d5db",
                        fontSize: "20px",
                    }}
                >
                    <p>• So schlimm ist es noch nicht.</p>
                    <p>• Andere trinken viel mehr.</p>
                    <p>• Ich habe alles im Griff.</p>
                    <p>• Ab morgen wird es besser.</p>
                </div>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Diese Sätze kennen viele Menschen.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Sie klingen vernünftig.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Genau deshalb funktionieren sie so gut.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Ehrlichkeit ist unbequem.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Ehrlichkeit bedeutet,
                    sich Fragen zu stellen,
                    auf die man die Antwort vielleicht schon kennt.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Deshalb bleiben viele Menschen lange bei den Geschichten,
                    die ihnen Sicherheit geben.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Nicht weil sie dumm sind.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Nicht weil sie schwach sind.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Sondern weil Ehrlichkeit manchmal bedeutet,
                    das eigene Weltbild zu verändern.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Für mich begann Veränderung nicht an dem Tag,
                    an dem ich aufgehört habe zu trinken.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Sie begann an dem Tag,
                    an dem ich aufhörte,
                    mir selbst alles schönzureden.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Rückblickend war Alkohol nicht das größte Problem.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "50px",
                    }}
                >
                    Das größte Problem waren die Geschichten,
                    mit denen ich ihn verteidigt habe.
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
