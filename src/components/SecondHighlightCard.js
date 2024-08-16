import React from "react";

import applePhotos_1 from "../assets/images/apple-photos-1.jpg";

export default function SecondHighlightCard() {
    return (
        <div className="flex justify-center max-w-[60rem] items-center">
            <div className="relative">
                <p className="text-2xl font-semibold text-white absolute top-4 left-6 max-w-[16rem]">
                    New 48MP camera. Super-high-resolution photos. 2x Telephoto.
                </p>
                <img
                    src={applePhotos_1}
                    alt="apple photos 1"
                    className="rounded-2xl w-full"
                />
            </div>
        </div>
    );
}
