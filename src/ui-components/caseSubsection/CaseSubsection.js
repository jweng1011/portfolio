import { React } from 'react';;

export function CaseSubsection({id, sectionData}) {
    const { header, paragraph1, paragraph2, paragraph3, bulletPoints, picture1URL, picture2URL, picture3URL, picture4URL, picture5URL, conclusion } = sectionData;
    return (
        <div id={id} className={`w-full md:max-w-2xl md:m-auto space-y-3`}>
            <h3>{header}</h3>
            <p>{paragraph1}</p>
            <ul className={`pl-6 list-disc`}>
                {bulletPoints.map((point) => {
                    return (
                        <li>{point}</li>
                    )
                })}
            </ul>
            <p>{paragraph2}</p>
            <div className={`flex flex-row space-x-6`}>
                <div className={`w-2/3`}>
                    <img src={picture1URL} alt={picture1URL} />
                </div>
                <div className={`w-1/3`}>
                    <img src={picture2URL} alt={picture2URL} />  
                </div>
            </div>
            <p>{paragraph3}</p>
            <div>
                <img src={picture3URL} alt={picture3URL} />
            </div>
            <p>{conclusion}</p>
            <div className={`flex flex-row space-x-6`}>
                <div className={`w-1/2`}>
                    <img src={picture4URL} alt={picture4URL} />
                </div>
                <div className={`w-1/2`}>
                    <img src={picture5URL} alt={picture5URL} />  
                </div>
            </div>
        </div>
    )
}