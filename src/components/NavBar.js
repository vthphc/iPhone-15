import React from "react";

import appleIcon from "../assets/icon/apple-logo.png";
import searchIcon from "../assets/icon/search-icon.png";
import bagIcon from "../assets/icon/bag-icon.png";

export default function NavBar() {
    return (
        <nav className="flex py-4 bg-white items-center flex-row justify-between px-48">
            <img className="w-5 h-5" src={appleIcon} alt="apple icon" />
            <div className="flex text-[14px] flex-row space-x-8">
                <div className="text-black hover:cursor-pointer hover:text-zinc-400 transform duration-300">Store</div>
                <div className="text-black hover:cursor-pointer hover:text-zinc-400 transform duration-300">Mac</div>
                <div className="text-black hover:cursor-pointer hover:text-zinc-400 transform duration-300">iPhone</div>
                <div className="text-black hover:cursor-pointer hover:text-zinc-400 transform duration-300">Support</div>
            </div>
            <div className="flex flex-row space-x-6">
                <img className="w-5 h-5" src={searchIcon} alt="search icon" />
                <img className="w-5 h-5" src={bagIcon} alt="bag icon" />
            </div>
        </nav>
    );
}
