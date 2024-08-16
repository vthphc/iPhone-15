import React from "react";

import highlight_4 from "../assets/images/highlight-4.jpg";

export default function FourthHighlightCard() {
    return (
        <div>
            <div>
                <div className="flex justify-center max-w-[60rem] items-center">
                    <div className="relative">
                        <p className="text-2xl flex flex-col font-semibold text-black absolute top-4 left-6">
                            Charging as easy as USB-C.
                        </p>
                        <img
                            src={highlight_4}
                            alt="highlight_3"
                            className="rounded-2xl w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
