import React from 'react';
import {CaseStudyButton} from "../caseStudyButton/CaseStudyButton";

export function CaseStudyList({caseStudies}) {

    return (
        <div className={`max-w-2xl m-auto space-y-6`}>
            {caseStudies.map((caseStudy) => {
                return (
                    <CaseStudyButton {...caseStudy} />
                )
            })}
        </div>
    )
}