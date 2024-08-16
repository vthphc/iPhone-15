import React from "react";

import NinthPageImage from "../assets/images/ninthpage-image.png";

export default function NinthPage() {
    return (
        <section id="seventhpage" className="bg-white pt-24 pb-24">
            <div className="flex flex-col font-inter px-48 py-12">
                <h1
                    id="title"
                    className="text-[80px] text-zinc-500 font-semibold leading-none"
                >
                    <span className="text-black">USB-C</span>
                    ompatible.
                </h1>
                <p className="text-zinc-500 font-inter text-xl text-balance font-semibold pt-12">
                    The new USB-C connector lets you{" "}
                    <span className="text-black">
                        charge your Mac or iPad with the same cable
                    </span>{" "}
                    you use to charge iPhone 15. You can even use iPhone 15 to
                    charge Apple Watch or AirPods. Bye-bye, cable clutter.
                </p>
            </div>
            <img
                src={NinthPageImage}
                alt="Ninth Page Image"
                className=""
            />
        </section>
    );
}
