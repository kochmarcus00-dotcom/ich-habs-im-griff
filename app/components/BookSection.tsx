import { BookOpen } from "lucide-react";
export default function BookSection() {
    return (
        <section
            style={{
                marginTop: "70px",
                marginBottom: "60px",
                padding: "40px",
                borderRadius: "18px",
                backgroundColor: "#111111",
                border: "1px solid rgba(214,138,31,.35)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "20px",
                }}
            >
                <BookOpen
                    size={30}
                    color="#D68A1F"
                    strokeWidth={2}
                />
                <h2
                    style={{
                        margin: 0,
                        fontSize: "34px",
                        color: "white",
                    }}
                >
                    Wenn du tiefer einsteigen möchtest
                </h2>
            </div>

            <p
                style={{
                    color: "#cfcfcf",
                    fontSize: "19px",
                    lineHeight: "1.9",
                    marginBottom: "30px",
                }}
            >
                <strong>„Ich dachte, ich hab's im Griff“</strong> ist kein klassischer
                Ratgeber.
                <br />
                <br />
                Das Buch erzählt ehrlich von Selbsttäuschung, Gewohnheiten und dem
                langen Weg zur Erkenntnis – ohne Schuldzuweisungen und ohne erhobenen
                Zeigefinger.
            </p>

            <a
                className="pulseButton"
                href="https://www.amazon.de/dp/B0FH6T3V4K"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: "inline-block",
                    backgroundColor: "#D68A1F",
                    color: "#111",
                    padding: "16px 30px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "17px",
                }}
            >
                Zum Buch auf Amazon →
            </a>
        </section>
    );
}