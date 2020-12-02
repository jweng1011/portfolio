import { React } from 'react';

export function SectionLink({url, onClick, onMouseEnter, onMouseLeave, children}) {
    const active = "text-blue-600";
    const hover = "hover:text-blue-400";
    return (
        <a href={url} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`${active} ${hover} w-full md:max-w-2xl md:m-auto`}>{children}</a> 
    )
}