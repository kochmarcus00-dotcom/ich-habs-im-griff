import OrientationHero from "./OrientationHero";
import OrientationSection from "./OrientationSection";
import "@/app/styles/orientation.css";

interface OrientationResultProps {
  result: any;
}

export default function OrientationResult({
  result,
}: OrientationResultProps) {

  if (!result) return null;

  return (

    <section className="orientation-result">

      <OrientationHero
        title={result.gedanke.text}
      />

      <OrientationSection
        icon="❤️"
        title={result.gefuehl.title}
        text={result.gefuehl.text}
      />

      <OrientationSection
        icon="🧠"
        title={result.verstehen.title}
        text={result.verstehen.text}
      />

      <OrientationSection
        icon="📖"
        title={result.wissen.title}
        text={result.wissen.text}
      />

      <OrientationSection
        icon="☕"
        title={result.marcus.title}
        text={result.marcus.text}
      />

    </section>

  );

}