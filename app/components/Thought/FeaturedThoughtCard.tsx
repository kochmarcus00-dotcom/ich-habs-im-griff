import Link from "next/link";

interface Props {
  title: string;
  emotion: string;
  href: string;
}

export default function FeaturedThoughtCard({
  title,
  emotion,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className={`thought-card ${emotion}`}
    >
      <div className="thought-card-icon">

        {/* später SVG */}

      </div>

      <h3>
        {title.split("\n").map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
      </h3>

      <div className="thought-divider" />

      <div className="thought-footer">

        <span>Gedanken öffnen</span>

        <span className="arrow">→</span>

      </div>

    </Link>
  );
}