import React from "react";

import videoSrc from "../assets/videos/hero.mp4";

export default function FirstPage() {
    return (
        <section id='firstpage'>
            <div className="flex flex-col items-center">
                <p className="font-inter py-4 text-sm text-center max-w-[24rem]">
                    Get $170–$620 in credit toward iPhone 15 when you trade in
                    iPhone 11 or higher.{" "}
                    <span className="text-blue-600 hover:underline hover:cursor-pointer">
                        Learn More
                    </span>
                </p>
            </div>
            <video
                className="pointer-events-none"
                autoPlay
                muted
                playsInline={true}
                key={videoSrc}
            >
                <source src={videoSrc} type="video/mp4" />
            </video>
            <div className="flex flex-col py-8 space-y-8 items-center">
                <a
                    href="#highlights"
                    className="text-white bg-blue-600 hover:bg-blue-500 transform duration-300 py-3 px-5 rounded-3xl"
                >
                    Buy
                </a>
                <p className="font-inter font-semibold text-xl">
                    From $799 or $33.29/mo. for 24 mo.
                </p>
            </div>
        </section>
    );
}
