import React, { useEffect } from 'react';
import { NavBar } from '../../ui-components/navBar/NavBar';
import { CaseIntro } from '../../ui-components/caseIntro/CaseIntro';
import dashboard from '../../media/masscosh/dashboard.mov';
import { CaseSection } from '../../ui-components/caseSection/CaseSection';
import logic from '../../media/masscosh/logic.jpg';
import flow from '../../media/masscosh/flow.jpg';
import v1 from '../../media/masscosh/v1.mov';
import disabling from '../../media/masscosh/Disabling.mov';
import { Footer } from '../../ui-components/footer/Footer';

const projIntro = {
    title: "MassCOSH",
    date: "February 2020 - May 2020",
    titleDescription: "Massachusetts Coalition for Occupational Safety and Health (MassCOSH) is a nonprofit organization that works to defend workers’ rights and safety in the workplace by providing support in cases of exploitation and unsafe work environments. During Spring 2020, through my Experimental College class called Techquity where we examined intersections of social issues and tech, I designed and developed a database and hotline intake form to digitize their data collection and management with 2 other classmates.",
    vid: dashboard,
}

const roleData = {
    role: "UI/UX Designer & Front End Developer",
    roleDescription: "Sole designer and developer in group of 3 students, in charge of the entire product design from research, conception, to prototyping. Learned and used React.js and Firebase to implement database from scratch.",
    timeline: "3 months",
    timeDescription: "Have a functioning database and intake form by the end of the semester, starting entirely from scratch.",
}

const projProblem = {
    eyebrow: "The Problem",
    header: "How do we digitize a complex hotline intake process?",
    description: "For the first month of the project, we were only given one resource: an outdated hotline intake form. Vague wording, confusing layouts, and our own lack of industry knowledge posed a challenge to understanding the problem space. On top of that, we initially had trouble reaching MassCOSH, which pushed us into tighter deadlines. To maximize efficiency in communcations and get the best understanding of the context the product was going to be used in, I did the following:",
}

const solution1 = {
    header: "1. Visualization of the intake process and form logic.",
    paragraph1: "Through conducting contextual research by going through the existing hotline form intake process and data management with the client and potential users, I knew the following:",
    bulletPoints: [
        "The hotline form contains conditional questions that lead to specific follow ups / next steps.",
        "The database / hotline intake form will only be accessed by the few people in charge of the hotline.",
        "Pain point of current process is manually entering handwritten data for annual reports and searching for data in excel sheets."
    ],
    picture1URL: logic,
    picture2URL: flow,
    paragraph2: "I created diagrams to illustrate user flow, data flow, and recommendation logic, using them to communicate back and forth with the client to confirm that the flow reflects their current process. Being able to have a visual of the process also allowed me to clearly pinpoint areas that could be optimized for efficiency.",
}

const solution2 = {
    header: "2. Identification of major issues early on by extensive user testing at low fidelity stages.",
    paragraph1: "With such a tight deadline, I needed to identify all the issues early to avoid major roadblocks later on. Through conducting user testing using low fidelity prototypes with potential users, I found the following issues (and resolve them!):",
    bulletPoints: [
        "The hotline form contains conditional questions that lead to specific follow ups / next steps.",
        "The database / hotline intake form will only be accessed by the few people in charge of the hotline.",
        "Pain point of current process is manually entering handwritten data for annual reports and searching for data in excel sheets."
    ],
    paragraph2: "Below is the first version of a conditional user flow, where options appeared based on selection.",
    vid1: v1,
    paragraph3: "Below is the final version which disables content based on selection. Through user testing, we found that this is a much better solution because users are using the form to ask questions while on the phone, so displaying all the questions helps the user know what questions are coming up.",
    vid2: disabling,
    conclusion: "This project forced me to find solutions under tight deadlines, pushing me to go outside my comfort zone to find alternate tools like Axure to fit my needs. It also helped me develop better communication skills, especially in taking initiative to explain my designs, my thought process, as well as knowing how to lead meetings."
}

export function MassCOSH() {
    const width = "max-w-xs sm:max-w-2xl lg:max-w-4xl m-auto";

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>
            <NavBar />
            <div className={`${width} flex flex-col space-y-24 pt-40 pb-20`}>
                <CaseIntro projDescription={projIntro} roleData={roleData} col={false} priv={true}/>
                <div className={`flex flex-col space-y-6`}>
                    <CaseSection sectionData={projProblem} />
                    {/* <div className={`flex flex-col w-full md:max-w-2xl md:m-auto space-y-3`}>
                        <SectionLink url={"#solution1"}>1. Visualization of the intake process and form logic.</SectionLink>
                        <SectionLink url={"#solution2"}>2. Identification of major issues early on by extensive user testing at low fidelity stages.</SectionLink>
                    </div> */}
                </div>
                <div id={"solution1"} className={`w-full md:max-w-2xl md:m-auto space-y-3`}>
                    <h3>{solution1.header}</h3>
                    <p>{solution1.paragraph1}</p>
                    <ul className={`pl-6 pt-3 list-disc`}>
                        {solution1.bulletPoints.map((point) => {
                            return (
                                <li className={`pb-3`}>{point}</li>
                            )
                        })}
                    </ul>
                    <div className={`pb-3`}>
                        <img className={`shadow-md`} src={solution1.picture2URL} alt={solution1.picture2URL} />  
                    </div>
                    <p>{solution1.paragraph2}</p>
                </div>
                <div id={"solution2"} className={`w-full md:max-w-2xl md:m-auto space-y-3`}>
                    <h3>{solution2.header}</h3>
                    <p>{solution2.paragraph1}</p>
                    <ul className={`pl-6 pt-3 list-disc`}>
                        {solution2.bulletPoints.map((point) => {
                            return (
                                <li className={`pb-3`}>{point}</li>
                            )
                        })}
                    </ul>
                    <p>{solution2.paragraph2}</p>
                    <div className={`w-full pb-3`}>
                        <video muted autostart loop controls className={`shadow-lg`} src={solution2.vid1} type="video/mov" />
                    </div>
                    <p className={`pb-3`}>{solution2.paragraph3}</p>
                    <div className={`w-full pb-3`}>
                        <video muted autostart loop controls className={`shadow-lg`} src={solution2.vid2} type="video/mov" />
                    </div>
                    <p className={`font-bold`}>{solution2.conclusion}</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}