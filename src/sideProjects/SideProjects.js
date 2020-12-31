import { React } from 'react';
import { NavBar } from '../ui-components/navBar/NavBar';
import aerobic from '../media/sideProjects/aerobicRespiration.mp4';
import wickard from '../media/sideProjects/wickard.mp4';
import { Footer } from '../ui-components/footer/Footer';
import { useEffect } from 'react';

export function SideProjects() {
    const width = "max-w-xs md:max-w-2xl m-auto";

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>
            <NavBar />
            <div className={`py-40 space-y-20`}>
                <div className={`${width} flex flex-grow flex-col space-y-20`}>
                    <div className={`space-y-1`}>
                        <h6>ANIMATION</h6>
                        <h1>Wickard vs. Filburn</h1>
                        <h5>October 2018</h5>
                        <p>An educational motion graphics animation on the landmark Supreme Court case, Wickard vs. Filburn. Created using Adobe Illustrator and After Effects for my high school senior year AP U.S. Government class.</p>
                        <div className={`pt-3 w-full`}>
                            <video muted autostart controls className={`shadow-lg`} src={wickard} type="video/mp4" />
                        </div>
                    </div>
                    <div className={`space-y-1`}>
                        <h6>ANIMATION</h6>
                        <h1>Aerobic Respiration</h1>
                        <h5>March 2018</h5>
                        <p>(My first motion graphics animation!) An educational motion graphics animation on aerobic respiration. Created using Adobe Illustrator and After Effects for my high school junior year biology class.</p>
                        <div className={`pt-3 w-full`}>
                            <video muted autostart controls className={`shadow-lg`} src={aerobic} type="video/mp4" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}