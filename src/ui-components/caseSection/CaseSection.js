import { React } from 'react';

export function CaseSection({id, sectionData}) {
    const { eyebrow, header, description, link1, link2, link3 } = sectionData;
    return (
        <div id={id} className={`w-full md:max-w-2xl md:m-auto space-y-3`}>
            <h6 className={`tracking-wider`}>{eyebrow}</h6>
            <h2>{header}</h2>
            <p>{description}</p>
            
        </div>
    )
}