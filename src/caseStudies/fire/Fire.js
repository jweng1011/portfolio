import React, { useEffect } from 'react';
import { NavBar } from '../../ui-components/navBar/NavBar';
import { CaseIntro } from "../../ui-components/caseIntro/CaseIntro";
import { CaseSection } from '../../ui-components/caseSection/CaseSection';
import { CaseSubsection } from '../../ui-components/caseSubsection/CaseSubsection';
import { SectionLink } from '../../ui-components/sectionLink/SectionLink';
import process from '../../images/fire/solutionProcess.png';
import scenarioSketch from '../../images/fire/scenarioSketch.png';
import navigation from '../../images/fire/navigation.png';
import scenarioFlow from '../../images/fire/scenarioFlow.png'
import scenarioHigh from '../../videos/scenario.gif';
import scenarioBefore from '../../images/fire/scenarioBefore@2x.png'
import scenarioSelection from '../../images/fire/scenarioSelection.png';
import consistencyFlow from '../../images/fire/consistencyFlow.gif';
import color from '../../images/fire/color.png';
import fireLogo from '../../images/fire/logo.png';
import illustration1 from '../../images/fire/illustration1.png';
import illustration2 from '../../images/fire/illustration2.png';
import onboarding from '../../images/fire/onboarding.mov';
import { Footer } from '../../ui-components/footer/Footer';

const roleData = {
    role: "UI/UX Designer",
    roleDescription: "Sole designer in a product development team of 6, in charge of the entire product design from research, conception, prototyping, to visual design.",
    timeline: "3 months",
    timeDescription: "MVP by the end of August 2020, redesigning entirely from scratch.",
}

const projIntro = {
    title: "Fire",
    date: "June 2020 - August 2020",
    titleDescription: "Fire is a cross-platform multilingual mobile app, designed for undocumented immigrants and allies, that provides access to scenario-based know your rights information, Rapid Response Network hotlines, and notifications of public ICE raids and relevant announcements. Partnered with CHIRLA (Coalition for Humane Immigrant Rights in Los Angeles), the goal of the app is to educate, empower, and defend immigrant communities around California.",
    vid: onboarding,
}

const projProblem = {
    eyebrow: "The Problem",
    header: "How do we provide rights information and emergency tools without endangering users during emergency situations?",
    description: "The app's primary goal is to defend and empower undocumented immigrants, particularly during emergency scenarios with immigration enforcement, making user safety my #1 concern. We needed to understand what tools users need access to in dangerous environments, how the app may impact their behavior, and whether that behavior could endanger the user. Here are the major design challenges I encountered:",
}

const projSolution = {
    eyebrow: "Solutions",
    header: "Draw design decisions from extensive user research",
    description: "I used user research, contextual inquiries, prototyping, and feedback to come up with solutions for each of the problems. Below is a rough outline of how I go about finding solutions.",
}

const solutionsSubsection1 = {
    header: "1. How do we structure large amounts of varying content on mobile devices?",
    paragraph1: "We were given scenario-based content that told users what to do when encountering immigration agents in different spaces. This meant a lot of conditional and instructional content that needed to fit on mobile screens. Based on insights from contextual inquiries, I knew the following:",
    bulletPoints: [
        "Users need quick access to the correct information.",
        "Users should not show or give access to their phone when interacting with immigration enforcement.",
    ],
    paragraph2: "After identifying hierarchies in the content, I created an information flow that presented information from most to least important within each scenario. This allows users who can't afford to read all the content under urgent situations to know the key information first. It also breaks down the content to smaller chunks to improve scanability.",
    picture1URL: scenarioFlow,
    picture2URL: scenarioSketch,
    conclusion: "Before (left) and after (right):",
    picture4URL: scenarioBefore,
    picture5URL: scenarioHigh,
}

const solutionsSubsection2 = {
    header: "2. How do we optimize usability for non-tech savvy users?",
    paragraph1: "Our primary users vary greatly in cultural, language, age, and education backgrounds. Based on user personas and interviews, we knew the following: ",
    bulletPoints: [
        "Elderly users may have sensory impairments, physical impairments, and difficulty navigating mobile apps.",
        "Younger generations that don't live with their family would want their parents / grandparents to be able to use the app.",
        "Unfamiliar user flows and patterns often lead to usability issues."
    ],
    paragraph2: "To optimize usability, I limited myself to 3 navigation patterns: a bottom navigation bar for top-levels, forward navigation for accessing lower-levels, and modals for special cases. To allow quick access to the emergency hotline, the emergency button is accessible everywhere on the app at the most accessible place on the screen.",
    picture1URL: navigation,
    picture2URL: scenarioSelection,
    conclusion: "I worked to make sure that the expected behavior of every component on the interface was clear by using common component layouts, clean iconography, and high contrast to draw focus on the content and assist navigation.",
}

const solutionsSubsection3 = {
    header: "3. How do we maintain consistency while distinguishing between content?",
    paragraph1: "Because of the varying nature of the content, it was difficult to maintain consistency between components, especially when the content didn't fit in to any existing content architectures, but also didn't warrant entirely new designs. I realized that:",
    bulletPoints: [
        "Illustrations, icons, and color should be used to assist users, not to distract from the flow or content.",
        "Each component or visual cue should maintain the same behavior throughout the app.",
        "Use hierarchy and special visual elements to highlight important information."
    ],
    picture1URL: color,
    picture2URL: consistencyFlow,
    conclusion: "This challenge forced me to rethink user experience, functional, and visual priorities, pushing me to develop a clearer design direction. I focused on limiting visual patterns and figuring out solutions that reused these patterns to push towards greater consistency.",
}


export function Fire() {
    const width = "max-w-md sm:max-w-2xl lg:max-w-4xl m-auto";

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <NavBar />
            <div className={`${width} flex flex-col space-y-24 py-40`}>
                <CaseIntro projDescription={projIntro} roleData={roleData} col={true} priv={false}/>
                <div className={`flex flex-col space-y-6`}>
                    <CaseSection sectionData={projProblem} />
                    <div className={`flex flex-col space-y-3`}>
                        <SectionLink url={"#solution1"}>1. How do we structure large amounts of varying content on mobile devices?</SectionLink>
                        <SectionLink url={"#solution2"}>2. How do we optimize usability for non-tech savvy users?</SectionLink>
                        <SectionLink url={"#solution2"}>3. How do we maintain consistency while distinguishing between content?</SectionLink>
                    </div>
                </div>
                <div className={`flex flex-col space-y-6`}>
                    <CaseSection sectionData={projSolution} />
                    <img src={process} alt="process" />
                </div>
                <CaseSubsection id={"solution1"} sectionData={solutionsSubsection1}/>
                <CaseSubsection id={"solution2"} sectionData={solutionsSubsection2}/>
                <CaseSubsection id={"solution3"} sectionData={solutionsSubsection3}/>
                <div>
                <div className={`w-full md:max-w-2xl md:m-auto space-y-3`}>
                    <h2>Visual Work</h2>
                    <p>In addition to UI/UX design, I designed the logo and two illustrations :)</p>
                </div>
                <div className={`flex flex-row w-full items-center`}>
                        <div>
                            <img src={fireLogo} alt={fireLogo} />
                        </div>
                        <div>
                            <img src={illustration1} alt={illustration1} />
                        </div>
                        <div>
                            <img src={illustration2} alt={illustration2} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        
    )
}