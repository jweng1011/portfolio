import React from "react";
import {NavBar} from "../ui-components/navBar/NavBar";
import {CaseStudyList} from "../ui-components/caseStudyList/CaseStudyList"

const caseList = [
    {
        id : 0,
        title: "Fire",
        description: "Description is this!",
    },
    {
        id: 1,
        title: "MassCOSH",
        description: "Description is this!",
    },
]

export function Work() {
    return (
        <div>
            <NavBar />
            <div className={`space-y-20`}>
                <div className={`flex flex-grow max-w-xs md:max-w-2xl m-auto space-y-6 md:space-x-6 md:space-y-0 flex-col md:flex-row`}>
                    <div className={`w-full md:w-1/3 space-y-4`}>
                        <h2 className={`font-normal`}>
                            Hey, I'm Jennifer 👋
                        </h2>
                        <div className={`space-y-1`}>
                            <p>jennifer.weng@tufts.edu</p>
                            <p>617-396-6433</p>
                            <p>LinkedIn</p>
                        </div>
                    </div>
                    <div className={`w-full md:w-2/3`}>
                        <p>I am product designer with 3 years of experience in UI/UX design and front end development, working with nonprofits to create user-centric solutions for social change.
                        <br /><br />Currently, I am a sophomore at Tufts University majoring in Computer Science and Engineering Psychology with a minor in Entrepreneurship 🎓
                        <br /><br />Don’t hesitate to reach out! ✉️
                        </p>
                    </div>
                </div>
                <CaseStudyList caseStudies={caseList}/>
            </div>
        </div>
    )
}