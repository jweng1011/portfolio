import React, { useEffect, useState } from "react";
import {NavBar} from "../ui-components/navBar/NavBar";
import {CaseStudyList} from "../ui-components/caseStudyList/CaseStudyList";
import fire from '../media/fire/hero.png';
import masscosh from '../media/masscosh/hero.gif';
import { SectionLink } from "../ui-components/sectionLink/SectionLink";
import { Footer } from "../ui-components/footer/Footer";

const caseList = [
    {
        id : 0,
        title: "Fire",
        description: "A cross-platform multilingual mobile app designed to educate, empower, and defend immigrant communities around California.",
        image: fire,
    },
    {
        id: 1,
        title: "MassCOSH",
        description: "A web database to digitize Massachusetts Coalition for Occupational Safety and Health's hotline form intake and data management.",
        image: masscosh,
    },
]

export function Work() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const width = "max-w-xs md:max-w-2xl m-auto";
    // const [copySuccess, setCopySuccess] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <NavBar />
            <div className={`pt-40 space-y-20`}>
                <div className={`${width} flex flex-grow flex-col md:flex-row space-y-6 md:space-x-6 md:space-y-0`}>
                    <div className={`w-full md:w-1/3 space-y-4`}>
                        <h2 className={`font-normal`}>
                            Hey, I'm Jennifer 👋
                        </h2>
                        <div className={`space-y-1 text-left`}>
                            <div>
                                <SectionLink onMouseEnter={() => setShowModal(true)}
                                                onMouseLeave={() => setShowModal(false)}
                                                onClick={() => navigator.clipboard.writeText('jennifer.weng@tufts.edu')}>
                                    jennifer.weng@tufts.edu
                                </SectionLink>
                                {showModal === true && (
                                    <div className={`px-2 rounded-md object-right fixed shadow-md bg-gradient-to-r from-indigo-400 to-blue-500`}>
                                        <p className={`text-sm text-white font-bold`}>Copy me! 📋</p>
                                    </div>
                                )}
                                {/* {copySuccess === true && (
                                    <div className={`px-2 rounded-md object-right fixed shadow-md bg-gradient-to-r from-indigo-400 to-blue-500`}>
                                        <p className={`text-sm text-white font-bold`}>Copied to your clipboard! 📋</p>
                                    </div>  
                                )} */}
                            </div>
                            <div>
                                <SectionLink url="https://www.linkedin.com/in/jennifer-weng/">LinkedIn</SectionLink>
                            </div>
                        </div>
                    </div>
                    <div className={`w-full md:w-2/3 space-y-6`}>
                        <div>
                            <p>I am product designer with 3 years of experience in UI/UX design and front end development, working with nonprofits to create user-centric solutions for social change.
                            <br /><br />Currently, I am a sophomore at Tufts University majoring in Computer Science and Engineering Psychology with a minor in Entrepreneurship 🎓
                            <br /><br />Don't hesitate to reach out! ✉️
                            </p>
                        </div>
                    </div>
                </div>
                <CaseStudyList caseStudies={caseList}/>
                <Footer />
            </div>
        </div>
    )
}