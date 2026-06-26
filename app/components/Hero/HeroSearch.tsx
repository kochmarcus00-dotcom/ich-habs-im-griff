"use client";

import { useState } from "react";

export default function HeroSearch() {

    const [text, setText] = useState("");

    return (

        <div className="hero-search-wrapper">

            <div className="hero-search">

                <div className="hero-search-icon">

                    {/* später SVG */}

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

    );;

}