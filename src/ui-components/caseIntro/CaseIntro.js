import React from 'react';
import { CaseRole } from '../caseRole/CaseRole';


export function CaseIntro({projDescription, roleData, col, priv}) {
    const { title, date, titleDescription, vid } = projDescription;
    const orientation = (col === true) ? 'flex-col md:flex-row' : 'flex-col';
    const headerWidth = (col === true) ? 'w-full md:w-2/3' : 'w-full';
    const vidWidth = (col === true) ? 'w-full md:w-1/3 max-w-xs' : 'w-full';

    return (
        <div className={`flex flex-col space-y-20`}>
            <div>
                <div className={`flex flex-grow ${orientation} space-x-10 space-y-10 items-center`}>
                    <div className={`${headerWidth} space-y-8`}>
                        <div className={`space-y-3`}>
                            <h1>{title}</h1>
                            <h5>{date}</h5>
                            <p>{titleDescription}</p>
                        </div>
                    </div>
                    
                    {priv === true ? <p className={`font-bold`}>NOTE: Due to confidentially, data displayed in final designs are sample data.</p> : ''}
                    <div className={`${vidWidth}`}>
                        <video muted autostart controls className={`shadow-lg`} src={vid} type="video/mov" />
                    </div>
                </div>
            </div>
            <CaseRole {...roleData} />
        </div>
)
}