import React from "react";

import videoSrc from "../assets/videos/a16_bionic.mp4";
import iphoneBatteryIcon from "../assets/icon/icon_iphone_battery_white.png";
import ScrollAnimation from "react-animate-on-scroll";

export default function EighthPage() {
    return (
        <section id="seventhpage" className="bg-black pb-24">
            <div className="flex flex-col font-inter px-48 pt-24 pb-24 justify-between">
                <h1
                    id="title"
                    className="text-[80px] text-white font-semibold flex flex-col text-center leading-none"
                >
                    A16 Bionic chip. <span>A Pro-proven powerhouse.</span>
                </h1>
            </div>
            <video
                className="pointer-events-none px-48"
                autoPlay
                muted
                playsInline={true}
                key={videoSrc}
            >
                <source src={videoSrc} type="video/mp4" />
            </video>
            <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce
                duration={1}
                className="text-zinc-500 text-center font-inter text-xl px-96 text-balance font-semibold pt-12"
            >
                <span className="text-white">
                    A16 Bionic powers all kinds of advanced features.
                </span>{" "}
                Like computational photography used for 24MP photos and
                next-generation portraits. Voice Isolation for phone calls. And
                smooth performance for graphics-intensive games. All with
                incredible efficiency for great battery life. No wonder it
                started as a Pro chip.
            </ScrollAnimation>
            <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce
                duration={1}
                className="w-full flex justify-center pt-12"
            >
                <div className="flex space-x-8 items-center pt-4 w-[24rem] border-t border-zinc-500">
                    <img src={iphoneBatteryIcon} alt="iPhone Battery Icon" />
                    <p className="text-zinc-500 text-xl font-semibold">
                        The A16 Bionic GPU is up to 40% faster than the GPU in
                        iPhone 12
                    </p>
                </div>
            </ScrollAnimation>
        </section>
    );
}
