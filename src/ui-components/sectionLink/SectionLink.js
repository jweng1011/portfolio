import { React } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';

export function SectionLink({url, onClick, onMouseEnter, onMouseLeave, children}) {
    const active = "text-blue-600";
    const hover = "hover:text-blue-400";
    return (
        <a href={url} class="button" onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`${active} ${hover} focus:outline-none w-full md:max-w-2xl md:m-auto`}>{children}</a> 
    )
}