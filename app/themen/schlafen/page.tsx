import ThemeHero from "@/app/components/Theme/ThemeHero";
import ThemeExperience from "@/app/components/Theme/ThemeExperience";
import ThemeThoughtNavigator from "@/app/components/Theme/ThemeThoughtNavigator";
import ThemeClusterGrid from "@/app/components/Theme/ThemeClusterGrid";
import ThemeInsight from "@/app/components/Theme/ThemeInsight";

import "@/app/components/Theme/theme.css";

export const metadata = {
    title: "Schlaf | Abstinenzkosmos",
    description:
        "Alles rund um Schlaf nach Alkohol – Orientierung und Zusammenhänge.",
};

export default function SchlafPage() {
    return (

        <main className="theme-page">

            <ThemeHero />

            

            <ThemeThoughtNavigator />

            <ThemeClusterGrid />

            <ThemeInsight />

        </main>

    );
}