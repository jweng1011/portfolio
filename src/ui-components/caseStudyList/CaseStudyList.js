import React from 'react';
import {CaseStudy} from "../caseStudy/CaseStudy";

export function CaseStudyList({caseStudies}) {
    return (
        <div className={`max-w-2xl m-auto space-y-6`}>
            {caseStudies.map((caseStudy) => {
                return (
                    <CaseStudy {...caseStudy} />
                )
            })}
        </div>
    )
}