const thoughts = [

    "Ich kann einfach nicht schlafen",

    "Ich denke ständig an Alkohol",

    "Ich möchte heute unbedingt trinken",

    "Ich fühle mich leer",

    "Ich streite nur noch mit meinem Partner",

    "Ich habe Angst vor einem Rückfall",

    "Ich möchte endlich frei sein"

];

export default function HeroSuggestions() {

    return (

        <>

            <div className="hero-small-title">

                ✦ VIELLEICHT GEHT DIR GERADE EINER DIESER GEDANKEN DURCH DEN KOPF

            </div>

            <div className="hero-suggestions">

                {thoughts.map((thought) => (

                    <button key={thought}>

                        {thought}

                    </button>

                ))}

            </div>

        </>

    );

}