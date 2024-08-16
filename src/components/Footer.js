import React from "react";

export default function Footer() {
    return (
        <footer className="bg-white pt-24">
            <div className="bg-white">
                <p className="text-[14px] text-zinc-500 px-48 py-4">
                    More ways to shop:{" "}
                    <span className="text-blue-600 underline">
                        Find an Apple Store
                    </span>{" "}
                    or{" "}
                    <span className="text-blue-600 underline">
                        other retailer
                    </span>{" "}
                    near you. Or call 1-800-MY-APPLE.
                </p>
            </div>
            <div className="border-t border-zinc-300 mx-48"></div>
            <div className="flex py-4 bg-white items-center flex-row justify-between px-48">
                <div className="text-[14px] text-zinc-500">
                    Copyright © 2024 Apple Inc. All rights reserved.
                </div>
                <div className="flex text-[14px] flex-row space-x-2">
                    <div className="text-zinc-500 hover:cursor-pointer hover:text-zinc-400 transform duration-300">
                        Privacy Policy
                    </div>
                    <div className="text-zinc-500">|</div>
                    <div className="text-zinc-500 hover:cursor-pointer hover:text-zinc-400 transform duration-300">
                        Terms of Use
                    </div>
                    <div className="text-zinc-500">|</div>
                    <div className="text-zinc-500 hover:cursor-pointer hover:text-zinc-400 transform duration-300">
                        Sales and Refunds
                    </div>
                    <div className="text-zinc-500">|</div>
                    <div className="text-zinc-500 hover:cursor-pointer hover:text-zinc-400 transform duration-300">
                        Legal
                    </div>
                    <div className="text-zinc-500">|</div>
                    <div className="text-zinc-500 hover:cursor-pointer hover:text-zinc-400 transform duration-300">
                        Site Map
                    </div>
                </div>
            </div>
        </footer>
    );
}
