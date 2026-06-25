import ArticleExtras from "@/app/components/ArticleExtras";

export const metadata = {
    title: "Ich kann jederzeit aufhören",
    description:
        "Warum dieser Satz viele Menschen jahrelang davon abhält, ehrlich hinzuschauen.",
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
                    Ich kann jederzeit aufhören
                </h1>

                <p
                    style={{
                        fontSize: "22px",
                        color: "#d1d5db",
                        marginBottom: "30px",
                    }}
                >
                    Es gibt einen Satz,
                    den unglaublich viele Menschen mit Alkoholproblemen irgendwann sagen.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    "Ich kann jederzeit aufhören."
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Ich habe ihn auch gesagt.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Nicht einmal.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Sondern über Jahre hinweg.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Der Satz klingt vernünftig.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Er klingt selbstbewusst.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Vor allem beruhigt er.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Denn solange wir glauben,
                    jederzeit aufhören zu können,
                    müssen wir uns keine unangenehmen Fragen stellen.
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
                    <p>• Habe ich überhaupt ein Problem?</p>
                    <p>• Warum denke ich so oft an Alkohol?</p>
                    <p>• Warum fällt Verzicht schwer?</p>
                    <p>• Warum dreht sich so viel darum?</p>
                </div>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Der Satz wird oft nicht benutzt,
                    um die Wahrheit herauszufinden.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Sondern um sie zu vermeiden.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Irgendwann habe ich mir eine einfache Frage gestellt:
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Wenn ich jederzeit aufhören kann,
                    warum tue ich es dann nicht?
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Diese Frage hat mich härter getroffen
                    als jede Diskussion über Alkoholabhängigkeit.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Denn plötzlich ging es nicht mehr darum,
                    was theoretisch möglich wäre.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Sondern darum,
                    was tatsächlich passiert.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Viele Menschen testen ihre Kontrolle nie wirklich.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Sie beruhigen sich mit dem Gedanken,
                    dass sie jederzeit aufhören könnten.
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "40px",
                    }}
                >
                    Vielleicht lautet die ehrlichere Frage deshalb:
                </p>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#cfcfcf",
                        marginBottom: "50px",
                    }}
                >
                    Würde es mir schwerfallen,
                    heute Abend keinen Alkohol zu trinken?
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
