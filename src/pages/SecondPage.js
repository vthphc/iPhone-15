import React from "react";

import playButton from "../assets/icon/play-button.png";
import FirstHighlightCard from "../components/FirstHighlightCard";
import SecondHighlightCard from "../components/SecondHighlightCard";
import ThirdHighlightCard from "../components/ThirdHighlightCard";
import FourthHighlightCard from "../components/FourthHighlightCard";

export default function SecondPage() {
    return (
        <section id="secondpage">
            <div className="flex font-inter px-48 py-12 items-end flex-row justify-between">
                <h1 id="title" className="text-5xl font-semibold">
                    Get the highlights.
                </h1>

                <div className="flex hover:underline hover:decoration-blue-600 hover:cursor-pointer items-center">
                    <p className="text-blue-600 text-xl">Watch the film</p>
                    <img
                        src={playButton}
                        alt="watch"
                        className="ml-2 w-5 h-5"
                    />
                </div>
            </div>
            <div className="w-full h-full flex flex-col space-y-8 px-48 items-center rounded-3xl overflow-hidden">
                <FirstHighlightCard />
                <SecondHighlightCard />
                <ThirdHighlightCard />
                <FourthHighlightCard />
            </div>
        </section>
    );
}
