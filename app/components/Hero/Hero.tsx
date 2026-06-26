import HeroHeadline from "./HeroHeadline";
import HeroSearch from "./HeroSearch";
import HeroSuggestions from "./HeroSuggestions";

export default function Hero() {
    return (
        <section className="hero">

            <div className="hero-mist"></div>

            <div className="hero-air"></div>

            <div className="hero-beam"></div>

            <div className="hero-container">

                <HeroHeadline />

                <HeroSearch />

                <HeroSuggestions />

            </div>

        </section>
    );
}