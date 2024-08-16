import React from "react";

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
                            src="https://res.cloudinary.com/diutkhjd3/image/upload/v1723805967/iphone-15/highlight-4_xna8o2.jpg"
                            alt="highlight_4"
                            className="rounded-2xl w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
