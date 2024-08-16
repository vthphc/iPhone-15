import React from "react";

import highlight_3 from "../assets/videos/highlight_3.mp4";

export default function ThirdHighlightCard() {
    return (
        <div>
            <div className="flex justify-center max-w-[60rem] items-center">
                <div className="relative">
                    <p className="text-2xl flex flex-col font-semibold text-black absolute top-4 left-6">
                        Durable color-infused glass
                        <span>and aluminum design.</span>
                    </p>
                    <video
                        className="pointer-events-none rounded-2xl w-full max-h-[32rem]"
                        autoPlay
                        muted
                        playsInline={true}
                        key={highlight_3}
                    >
                        <source src={highlight_3} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
}
