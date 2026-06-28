import ThoughtCard from "./ThoughtCard";
import "@/app/styles/featured-thoughts.css";
const featuredThoughts = [
  {
    title: "Ich denke ständig\nan Alkohol.",
    text: "Nicht jeder Gedanke verlangt eine Antwort.",
    icon: "craving",
    href: "/gedanken/ich-denke-staendig-an-alkohol",
  },
  {
    title: "Ich kann\nnicht schlafen.",
    text: "Manche Nächte möchten gehört werden.",
    icon: "sleep",
    href: "/gedanken/ich-kann-nicht-schlafen",
  },
  {
    title: "Ich fühle\nmich leer.",
    text: "Leere ist nicht immer der Feind.",
    icon: "empty",
    href: "/gedanken/ich-fuehle-mich-leer",
  },
  {
    title: "Ich möchte\nendlich frei sein.",
    text: "Vielleicht beginnt Freiheit heute.",
    icon: "freedom",
    href: "/gedanken/ich-moechte-endlich-frei-sein",
  },
];

export default function FeaturedThoughts() {
  return (
    <section className="featured-thoughts">

      <div className="featured-heading">

        <span>
          Vier Gedanken, mit denen viele Menschen beginnen.
        </span>

        <h2 className="featured-title">
          Vielleicht beginnt Orientierung genau hier.
        </h2>

      </div>

      <div className="featured-grid">

        {featuredThoughts.map((thought) => (
          <ThoughtCard
            key={thought.href}
            {...thought}
          />
        ))}

      </div>

    </section>
  );
}