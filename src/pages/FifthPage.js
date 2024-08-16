import React from "react";

import fifthPageImage from "../assets/images/fifthpage_image.jpeg";

export default function FifthPage() {
    return (
        <section id="fifthpage" className="bg-white pb-24">
            <div className="flex flex-col font-inter mb-8 px-48 py-12 justify-between">
                <h1
                    id="title"
                    className="text-[80px] font-semibold flex flex-col text-center leading-none"
                >
                    All-new 48MP Main camera.
                    <span>For breathtaking, smile-making picture taking.</span>
                </h1>
            </div>
            <div className="px-48 relative">
                <img src={fifthPageImage} alt="fifthPageImage" />
                <div className="absolute flex space-x-12 -bottom-8 left-1/2 -translate-x-1/2">
                    <div className="w-1/2">
                        <p className="text-[20px] font-semibold text-balance text-zinc-500">
                            Now the Main camera shoots in super-high resolution.
                            So it’s easier than ever to{" "}
                            <span className="text-black">
                                take standout photos with amazing detail
                            </span>
                            — from snapshots to stunning landscapes.
                        </p>
                    </div>
                    <div className="w-1/2 flex flex-col space-y-8">
                        <div>
                            <p className="text-xl font-semibold text-zinc-500">
                                Up to
                            </p>
                            <h1 className="text-5xl font-semibold text-black">
                                4x resolution
                            </h1>
                            <p className="text-xl font-semibold text-zinc-500">
                                to capture incredible detail
                            </p>
                        </div>
                        <div>
                            <h1 className="text-5xl font-semibold text-black">
                                2x Telephoto
                            </h1>
                            <p className="text-xl font-semibold text-zinc-500">
                                is like having a third camera
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
