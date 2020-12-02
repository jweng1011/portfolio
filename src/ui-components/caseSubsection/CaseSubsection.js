import { React } from 'react';;

export function CaseSubsection({id, sectionData}) {
    const { header, paragraph1, paragraph2, paragraph3, bulletPoints, picture1URL, picture2URL, picture3URL, picture4URL, picture5URL, conclusion } = sectionData;
    return (
        <div id={id} className={`w-full md:max-w-2xl md:m-auto space-y-3`}>
            <h3>{header}</h3>
            <p>{paragraph1}</p>
            <ul className={`pl-6 pt-3 list-disc`}>
                {bulletPoints.map((point) => {
                    return (
                        <li className={`pb-3`}>{point}</li>
                    )
                })}
            </ul>
            <div className={`flex flex-row space-x-6 pb-6`}>
                <div className={`w-2/3`}>
                    <img className={`shadow-md`} src={picture1URL} alt={picture1URL} />
                </div>
                <div className={`w-1/3`}>
                    <img className={`shadow-md`} src={picture2URL} alt={picture2URL} />  
                </div>
            </div>
            <p>{paragraph2}</p>
            <p className={`font-bold`}>{conclusion}</p>
            <div className={`flex flex-row space-x-6`}>
                <div className={`w-1/2`}>
                    <img className={`shadow-md`} src={picture4URL} alt={picture4URL} />
                </div>
                <div className={`w-1/2`}>
                    <img className={`shadow-md`} src={picture5URL} alt={picture5URL} />  
                </div>
            </div>
        </div>
    )
}