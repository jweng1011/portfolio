import React from 'react';
import { NavBar } from '../navBar/NavBar';
import lorem from '../../images/fire/illustration1.png'
import { CaseRole } from '../caseRole/CaseRole';


export function CaseIntro({projDescription, roleData}) {
    const { title, date, titleDescription } = projDescription;
    return (
        <div>
            <NavBar />
            <div className={`flex flex-col space-y-20`}>
                <div>
                    <div className={`flex flex-grow flex-col md:flex-row space-x-10`}>
                        <div className={`w-full md:w-2/3 space-y-8`}>
                            <div className={`space-y-3`}>
                                <h1>{title}</h1>
                                <h5>{date}</h5>
                                <p>{titleDescription}</p>
                            </div>
                        </div>
                        <div className={`w-full md:w-1/3`}>
                            <img src={lorem} className={`w-full`} alt="test" />
                        </div>
                    </div>
                </div>
                <CaseRole {...roleData} />
            </div>
        </div>
    )
}