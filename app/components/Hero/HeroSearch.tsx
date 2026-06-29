"use client";

import { useState } from "react";
import CosmosIcon from "../icons/CosmosIcon";
import { getOrientation } from "@/app/kosmos";
import OrientationResult from "../Orientation/OrientationResult";

export default function HeroSearch() {

    const [text, setText] = useState("");
    const result = getOrientation(text);

    return (

        <>

            <div className="hero-search-wrapper">

                <div className="hero-search">

                    <div className="hero-search-icon">

                        <CosmosIcon />

                    </div>

                    <div className="hero-divider"></div>

                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Schreibe einfach auf, was dich gerade beschäftigt ..."
                    />

                    <button>

                        →

                    </button>

                </div>

            </div>

            <OrientationResult result={result} />

        </>

    );

}