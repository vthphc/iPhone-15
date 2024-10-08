import React from "react";

import iPhoneBatteryIcon from "../assets/icon/icon_iphone_battery.png";
import ScrollAnimation from "react-animate-on-scroll";

export default function SeventhPage() {
    return (
        <section id="seventhpage" className="bg-white pb-36">
            <div className="flex flex-col font-inter px-48 py-8 justify-between">
                <h1
                    id="title"
                    className="text-[80px] font-semibold flex mb-8 flex-col text-center leading-none"
                >
                    All-day battery life.{" "}
                    <span>For all the things you want to keep doing.</span>
                </h1>
            </div>
            <div className="relative flex justify-center">
                <img
                    src="https://res.cloudinary.com/diutkhjd3/image/upload/v1723805966/iphone-15/seventhpage-image_mlnsja.jpg"
                    alt="Seventh Page"
                />
                <div className="absolute px-48 -bottom-[10%] flex justify-between">
                    <ScrollAnimation
                        animateIn="fadeInUp"
                        animateOnce
                        className="flex w-1/2 flex-col space-y-8"
                    >
                        <div className="flex flex-col leading-none">
                            <p className="text-xl text-zinc-500 font-semibold">
                                Up to
                            </p>
                            <h1 className="text-[80px] font-semibold">
                                26 hrs
                            </h1>
                            <p className="text-xl text-zinc-500 font-semibold">
                                video playback on iPhone 15 Plus
                            </p>
                        </div>
                        <div className="flex flex-col leading-none">
                            <p className="text-xl text-zinc-500 font-semibold">
                                Up to
                            </p>
                            <h1 className="text-[80px] font-semibold">
                                20 hrs
                            </h1>
                            <p className="text-xl text-zinc-500 font-semibold">
                                video playback on iPhone 15
                            </p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation
                        animateIn="fadeInUp"
                        animateOnce
                        className="flex w-1/2 items-center space-x-8"
                    >
                        <img
                            src={iPhoneBatteryIcon}
                            alt="iPhone Battery Icon"
                            className="w-12 h-12"
                        />
                        <p className="text-xl text-zinc-500 font-semibold">
                            Up to 3 additional hours of video playback compared
                            to iPhone 12
                        </p>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}
