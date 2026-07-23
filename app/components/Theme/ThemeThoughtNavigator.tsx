const thoughts = [
    {
        title: "Ich kann nicht einschlafen.",
        subtitle: "Der Kopf kommt einfach nicht zur Ruhe.",
        href: "/themen/schlaf/einschlafen",
        icon: "🌙",
    },
    {
        title: "Ich wache ständig auf.",
        subtitle: "Die Nacht fühlt sich unruhig an.",
        href: "#",
        icon: "🌅",
    },
    {
        title: "Ich träume extrem intensiv.",
        subtitle: "Seit der Abstinenz ist alles anders.",
        href: "#",
        icon: "💭",
    },
];

export default function ThemeThoughtNavigator() {
    return (
        <section className="theme-thoughts">

            <div className="theme-container">

                <p className="section-kicker">
                    ORIENTIERUNG
                </p>

                <h2>
                    Welcher Gedanke beschreibt dich am besten?
                </h2>

                <div className="thought-grid">

                    {thoughts.map((thought) => (
                        <a
                            key={thought.title}
                            href={thought.href}
                            className="thought-card"
                        >
                            <div className="thought-icon">
                                {thought.icon}
                            </div>

                            <h3>{thought.title}</h3>

                            <p>{thought.subtitle}</p>

                            <span>
                                Orientierung finden →
                            </span>

                        </a>
                    ))}

                </div>

            </div>

        </section>
    );
}