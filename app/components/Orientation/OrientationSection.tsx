interface Props {

    icon: string;

    title: string;

    text: string;

}

export default function OrientationSection({

    icon,

    title,

    text,

}: Props) {

    return (

        <section className="orientation-section">

            <div className="orientation-icon">

                {icon}

            </div>

            <h2 className="orientation-title">

                {title}

            </h2>

            <p className="orientation-text">

                {text}

            </p>

        </section>

    );

}