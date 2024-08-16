import React from "react";

export default function FirstHighlightCard() {
    return (
        <div className="flex justify-center max-w-[60rem] items-center">
            <div className="relative">
                <p className="text-2xl font-semibold text-black absolute top-0 left-1/2 -translate-x-1/2">
                    Dynamic Island stays on top of it all.
                </p>
                <video
                    className="pointer-events-none rounded-2xl w-full"
                    autoPlay
                    muted
                    playsInline={true}
                    key="https://res.cloudinary.com/diutkhjd3/video/upload/v1723805978/iphone-15/highlight_1_ykgwsy.mp4"
                >
                    <source
                        src="https://res.cloudinary.com/diutkhjd3/video/upload/v1723805978/iphone-15/highlight_1_ykgwsy.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
        </div>
    );
}
