import Image from "next/image";

export default function HeroHeadline() {

    return (

        <>

            <div className="hero-logo">

                <Image
                    src="/abstinenzkosmos-deine-reise-zur-informierten-selbstbestimmung.png"
                    alt="Abstinenzkosmos"
                    width={170}
                    height={70}
                    priority
                    className="hero-logo-image"
                />

            </div>

            <h1>

                Was beschäftigt
                <br />
                dich heute?

            </h1>

            <p>

                Es gibt keine richtigen oder falschen Gedanken.
                <br />
                Manchmal hilft es schon,
                ihnen einen Namen zu geben.

            </p>

        </>

    );

}