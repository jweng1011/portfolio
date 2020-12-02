import { React } from 'react';
import { Link } from 'react-router-dom';

export function Button({onClick, onMouseEnter, onMouseLeave, to, children}) {
    const styles = "rounded-md bg-blue-500 text-white px-6 py-4 text-lg";
    const transition = "transition duration-300 ease-in-out";
    const hover = "hover:shadow-lg hover:bg-blue-400 transform hover:scale-105";
    const focus = "focus:outline-none";

    return (
        <Link to={to} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <button  className={`${styles} ${transition} ${hover} ${focus}`}>
                {children}
            </button>
        </Link>
    )
}