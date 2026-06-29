interface Props {

    title: string;

}

export default function OrientationHero({

    title,

}: Props) {

    return (

        <section className="orientation-hero">

            <span className="orientation-overline">

                Der Abstinenzkosmos hat einen Gedanken gefunden

            </span>

            <h1>

                {title}

            </h1>

        </section>

    );

}