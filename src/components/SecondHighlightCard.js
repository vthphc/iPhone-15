import React from "react";

export default function SecondHighlightCard() {
    return (
        <div className="flex justify-center max-w-[60rem] items-center">
            <div className="relative">
                <p className="text-2xl font-semibold text-white absolute top-4 left-6 max-w-[16rem]">
                    New 48MP camera. Super-high-resolution photos. 2x Telephoto.
                </p>
                <img
                    src="https://res.cloudinary.com/diutkhjd3/image/upload/v1723805966/iphone-15/apple-photos-1_lq2r7y.jpg"
                    alt="apple photos 1"
                    className="rounded-2xl w-full"
                />
            </div>
        </div>
    );
}
