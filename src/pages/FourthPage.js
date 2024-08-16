import React from "react";

import fourthPageiPhone from "../assets/images/fourthpage-iphone.webp";

import icon_ceramic_shield from "../assets/icon/icon_ceramic_shield.png";
import icon_water_resistant from "../assets/icon/icon_water.png";
import incon_enclosure from "../assets/icon/icon_enclosure.png";

export default function FourthPage() {
    return (
        <section id="fourthpage" className="bg-white">
            <div className="flex flex-col font-inter space-y-8 pl-64 py-12 justify-between">
                <h1
                    id="title"
                    className="text-[80px] font-semibold flex flex-col max-w-[40rem] leading-none"
                >
                    Color through and through.
                    <span>Tough all around.</span>
                </h1>
                <p className="text-xl max-w-[42rem] text-zinc-500 font-semibold text-start text-balance">
                    The innovative new design features{" "}
                    <span className="text-black mx-1.5">
                        back glass that has color infused throughout the
                        material.
                    </span>
                    A custom dual ion-exchange process for the glass, and an
                    aerospace-grade aluminum enclosure, help make iPhone 15
                    incredibly durable.
                </p>
                <img
                    src={fourthPageiPhone}
                    alt="iPhone 15"
                    className="pr-64 pt-12"
                />
            </div>
            <div className="w-full px-80 pb-24 font-inter flex justify-center">
                <div className="flex justify-between space-x-12">
                    <div className="flex flex-1 flex-col items-start ">
                        <img
                            src={icon_ceramic_shield}
                            alt="Ceramic Shield"
                            className=""
                        />
                        <h2 className="text-xl pt-4 font-semibold">
                            Dependably durable.
                        </h2>
                        <p className="text-xl font-semibold text-zinc-500 text-balance">
                            The Ceramic Shield front is tougher than any
                            smartphone glass.
                        </p>
                    </div>
                    <div className="flex flex-1 flex-col items-start">
                        <img
                            src={icon_water_resistant}
                            alt="Water Resistant"
                            className=""
                        />
                        <h2 className="text-xl pt-4 font-semibold">
                            Remarkably resistant.
                        </h2>
                        <p className="text-xl font-semibold text-zinc-500 text-balance">
                            iPhone is splash, water, and dust resistant. What a
                            relief.
                        </p>
                    </div>
                    <div className="flex flex-1 flex-col items-start">
                        <img
                            src={incon_enclosure}
                            alt="Enclosure"
                            className=""
                        />
                        <h2 className="text-xl pt-4 font-semibold">
                            Truly tough.
                        </h2>
                        <p className="text-xl font-semibold text-zinc-500 text-balance">
                            The aerospace-grade aluminum enclosure is super
                            strong and light.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
