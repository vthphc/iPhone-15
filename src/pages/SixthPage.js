import React from "react";

import sixthPageImage from "../assets/images/sixthpage-image.jpeg";
import potraitModeImage from "../assets/images/portrait_mode.jpeg";
import ScrollAnimation from "react-animate-on-scroll";

export default function SixthPage() {
    return (
        <section id="sixthpage" className="bg-white pb-24">
            <div className="flex flex-col font-inter px-48 py-8 justify-between">
                <h1
                    id="title"
                    className="text-[80px] font-semibold flex mb-8 flex-col text-start leading-none"
                >
                    Focus‑pocus,
                    <span>magical new portraits.</span>
                </h1>
                <ScrollAnimation
                    animateIn="fadeInUp"
                    animateOnce
                    className="text-xl text-zinc-500 font-semibold text-start text-balance"
                >
                    More detail and richer color make a dramatic difference in
                    your portraits. And now you can tap to
                    <span className="text-black mx-1.5">
                        shift the focus between subjects — even after you take
                        the shot.
                    </span>
                    Presto chango.
                </ScrollAnimation>
            </div>
            <img src={sixthPageImage} alt="sixthPageImage" className="px-48" />
            <div className="relative flex px-96 pt-24 items-center">
                <img
                    src={potraitModeImage}
                    alt="potraitModeImage"
                    className="w-[65%]"
                />
                <ScrollAnimation
                    animateIn="fadeInUp"
                    animateOnce
                    className="absolute left-[50%] text-xl font-semibold text-zinc-500 text-start text-balance max-w-[24rem] w-1/2"
                >
                    Want to quickly capture the moment before it’s gone?{" "}
                    <span className="text-black">
                        You no longer have to switch to Portrait mode.
                    </span>{" "}
                    If your subject is a person, dog, or cat, iPhone 15
                    automatically captures depth information. So you can choose
                    to instantly see your photo as a portrait, with an artful
                    blur effect. Or later in the Photos app.
                </ScrollAnimation>
            </div>
        </section>
    );
}
