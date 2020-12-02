import React from 'react';
import {Link} from "react-router-dom";

export function NavBar() {
    const width = "max-w-md sm:max-w-2xl lg:max-w-4xl m-auto";
    const hover = "hover:text-blue-500";
    const transition = "transition duration-300 ease-in-out";

    return (
        <div>
            <header className={`fixed shadow w-full bg-white z-50 pt-16 pb-6`}>
                <div className={`${width} flex justify-between items-center`}>
                    <div>
                        <Link className={`text-lg font-bold text-gray-800 ${hover}`} to="/">Jennifer Weng</Link>
                    </div>
                    <div className={`flex justify-between space-x-12`}>
                        <Link className={`px-2 py-1 ${hover} ${transition}`} to={"/"}>Work</Link>
                        <a className={`px-2 py-1 ${hover} ${transition}`} href={"https://drive.google.com/file/d/1oH7kxUrxLV-GQls1FLETk9LbdSAQqGUk/view?usp=sharing"}>Resume</a>
                    </div>
                </div>
                
            </header>
        </div>
    )
}

