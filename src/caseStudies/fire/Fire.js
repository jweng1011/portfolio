import React from 'react';
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
}

const projProblem = {
    eyebrow: "The Problem",
    header: "How do we provide rights information and emergency tools without endangering users during emergency situations?",
    description: "The primary users of the app are undocumented immigrants, so our #1 concern was their safety in emergency situations with immigration enforcement. Since we are providing tools to defend immigrant populations during these encounters, we needed to understand how users need to access the tools in dangerous environments, how the app may impact their behavior, and whether that behavior could endanger the user. Here is a breakdown of the major design challenges we needed to address:",
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
        "Elderly users may have sensory impairments, physical impairments, and difficulty navigating mobile apps."
    ],
    paragraph2: "After identifying hierarchies in the content, I created an information flow that presented information from most to least important within each scenario. This allows users who can't afford to read all the content under urgent situations to know the key information first. It also breaks down the content to smaller chunks to improve scanability.",
    picture1URL: scenarioFlow,
    picture2URL: scenarioSketch,
    picture3URL: navigation,
    paragraph3: "To optimize usability, I limited myself to 3 navigation patterns: a bottom navigation bar for top-levels, forward navigation for accessing lower-levels, and modals for special cases. To allow quick access to the emergency hotline, the emergency button is accessible everywhere on the app at the most accessible place on the screen.",
    conclusion: "Before and after:",
    picture4URL: scenarioBefore,
    picture5URL: scenarioHigh,
}

export function Fire() {
    const width = "max-w-md sm:max-w-2xl lg:max-w-4xl m-auto";

    return (
        <div className={`${width} flex flex-col space-y-24 mb-20`}>
            <CaseIntro projDescription={projIntro} roleData={roleData}/>
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
            <CaseSubsection id="solution1" sectionData={solutionsSubsection1}/>
        </div>
    )
}