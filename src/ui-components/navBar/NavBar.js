import React from 'react';
import {Link} from "react-router-dom";

export function NavBar() {
    const width = "max-w-md sm:max-w-2xl lg:max-w-4xl m-auto";
    return (
        <div className={`pt-12 py-4 mb-20`}>
            <div className={`${width} flex justify-between items-center`}>
                <div>
                    <h4>Jennifer Weng</h4>
                </div>
                <div className={`flex justify-between space-x-12`}>
                    <Link className={`px-2 py-1`} to={"/"}>Work</Link>
                    <Link className={`px-2 py-1`} to={"/resume"}>Resume</Link>
                    <Link className={`px-2 py-1`} to={"/contact"}>Contact</Link>
                </div>
            </div>
        </div>
    )
}

