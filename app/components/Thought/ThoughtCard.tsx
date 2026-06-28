import Link from "next/link";
import "@/app/styles/thought-card.css";

import CravingIcon from "../icons/CravingIcon";
import SleepIcon from "../icons/SleepIcon";
import EmptyIcon from "../icons/EmptyIcon";
import FreedomIcon from "../icons/FreedomIcon";

interface Props {
  title: string;
  text: string;
  icon: string;
  href: string;
}

export default function ThoughtCard({
  title,
  text,
  icon,
  href,
}: Props) {
  return (
    <Link href={href} className="thought-card">

      <div className="thought-content">

        <div className="thought-icon">

          {icon === "craving" && <CravingIcon />}
          {icon === "sleep" && <SleepIcon />}
          {icon === "empty" && <EmptyIcon />}
          {icon === "freedom" && <FreedomIcon />}

        </div>

        <h3 className="thought-title">
          {title.split("\n").map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </h3>

        <p className="thought-text">
          {text}
        </p>

      </div>

      <div className="thought-divider" />

      <div className="thought-footer">

        <span>GEDANKEN ENTDECKEN</span>

        <span>→</span>

      </div>

    </Link>
  );
}