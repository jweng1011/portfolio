import React from 'react';
import {Link} from "react-router-dom";

export function NavBar() {
    return (
        <div className={`pt-12 py-4 mb-16`}>
            <div className={`flex justify-between items-center max-w-3xl m-auto`}>
                <div>
                    <h4>Jennifer Weng</h4>
                </div>
                <div className={`flex justify-between space-x-12`}>
                    <Link className={`block px-2 py-1`} to={"/"}>Work</Link>
                    <Link className={`block px-2 py-1`} to={"/resume"}>Resume</Link>
                    <Link className={`block px-2 py-1`} to={"/contact"}>Contact</Link>
                </div>
            </div>
        </div>
    )
}

