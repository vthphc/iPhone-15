import React from "react";

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
                        key="https://res.cloudinary.com/diutkhjd3/video/upload/v1723805973/iphone-15/highlight_3_ub24xc.mp4"
                    >
                        <source
                            src="https://res.cloudinary.com/diutkhjd3/video/upload/v1723805973/iphone-15/highlight_3_ub24xc.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
            </div>
        </div>
    );
}
