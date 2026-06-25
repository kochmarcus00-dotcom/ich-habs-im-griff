import ArticleExtras from "@/app/components/ArticleExtras";

export const metadata = {
    title: "Ich trinke nur am Wochenende",
    description:
        "Warum ein Alkoholproblem nicht davon abhängt, an wie vielen Tagen du trinkst.",
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
                    Ich trinke nur am Wochenende
                </h1>

                <p
                    style={{
                        fontSize: "22px",
                        color: "#d1d5db",
                        marginBottom: "30px",
                    }}
                >
                    Viele Menschen glauben,
                    dass ein Alkoholproblem nur dann existiert,
                    wenn man jeden Tag trinkt.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Deshalb beruhigen sie sich mit einem Gedanken:
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    "Ich trinke ja nur am Wochenende."
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "24px",
                    }}
                >
                    Vielleicht stimmt das sogar.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Doch die entscheidende Frage lautet nicht:
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    An wie vielen Tagen trinkst du?
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Sondern:
                    Welche Rolle spielt Alkohol in deinem Leben?
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
                    <p>• Freust du dich die ganze Woche darauf?</p>
                    <p>• Denkst du oft daran?</p>
                    <p>• Fällt Verzicht schwer?</p>
                    <p>• Wird fast jedes Wochenende getrunken?</p>
                </div>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "24px",
                    }}
                >
                    Viele Menschen trinken nur freitags und samstags.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Trotzdem dreht sich ein großer Teil ihrer Gedanken um Alkohol.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "24px",
                    }}
                >
                    Der Kalender sagt:
                    Nur Wochenende.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Der Kopf sagt oft etwas anderes.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "24px",
                    }}
                >
                    Viele Menschen suchen nach Beweisen,
                    dass sie kein Problem haben.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Deshalb vergleichen sie sich mit anderen.
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
                    <p>• Andere trinken jeden Tag</p>
                    <p>• Andere trinken mehr</p>
                    <p>• Andere haben ihr Leben nicht im Griff</p>
                </div>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Doch Alkoholprobleme entstehen nicht durch Vergleiche.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Sie entstehen dort,
                    wo Ehrlichkeit fehlt.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Vielleicht ist die wichtigste Frage nicht:
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    "Trinke ich nur am Wochenende?"
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "50px",
                    }}
                >
                    Sondern:
                    "Warum möchte ich überhaupt trinken?"
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
