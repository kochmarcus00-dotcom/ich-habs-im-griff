import HeroHeadline from "./HeroHeadline";
import HeroSearch from "./HeroSearch";
import FeaturedThoughts from "../Thought/FeaturedThoughts";
import HeroScene from "./HeroScene";
import "./scene.css";

export default function Hero() {
    return (
        <section className="hero">

            <HeroScene />

            <div className="hero-container">

                <HeroHeadline />

                <HeroSearch />

                <FeaturedThoughts />

            </div>

        </section>
    );
}