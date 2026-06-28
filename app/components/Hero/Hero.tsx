import HeroHeadline from "./HeroHeadline";
import HeroSearch from "./HeroSearch";
import FeaturedThoughts from "../Thought/FeaturedThoughts";

export default function Hero() {
    return (
        <section className="hero">

            <div className="hero-mist"></div>

            <div className="hero-air"></div>

            <div className="hero-beam"></div>

            <div className="hero-container">

                <HeroHeadline />

                <HeroSearch />

                <FeaturedThoughts />

            </div>

        </section>
    );
}