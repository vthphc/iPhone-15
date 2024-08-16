import React from "react";

import dynamicIsland from "../assets/images/third-page-dynamic-island.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export default function ThirdPage() {
    return (
        <section className="bg-white" id="thirdpage">
            <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce
                className="flex font-inter px-48 py-12 items-end flex-row justify-between"
            >
                <h1 id="title" className="text-5xl font-semibold">
                    Explore the full story.
                </h1>
            </ScrollAnimation>
            <div className="w-full flex flex-col space-y-8 pt-36 justify-center items-center">
                <p className="text-[80px] flex flex-col max-w-[40rem] font-semibold text-center leading-none">
                    Dynamic Island.
                    <span>For when things just pop up.</span>
                </p>
                <ScrollAnimation
                    animateIn="fadeInUp"
                    animateOnce
                    className="text-xl max-w-[42rem] text-zinc-500 font-semibold text-center text-balance"
                >
                    Dynamic Island
                    <span className="text-black mx-1.5">
                        bubbles up alerts and Live Activities
                    </span>
                    — so you don’t miss them while you’re doing something else.
                    You can track your next ride, see who’s calling, check your
                    flight status, and so much more.
                </ScrollAnimation>
                <img
                    src={dynamicIsland}
                    alt="Dynamic Island"
                    className="max-w-[42rem]"
                />
            </div>
        </section>
    );
}
