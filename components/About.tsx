import React, { FC, useEffect } from "react";
import Divider from "./reusable-components/Divider";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const About: FC = () => {

    useEffect((): void => {
        AOS.init();
    })

    return <section className="space_sections" id="about">
        <Divider title="About Me" emoji="😇" />
        <div className="space_subsection">
                <h1 className="about_name" data-aos='fade-down'>I am Abdulaziz,</h1>
                <p className="about_deep" data-aos='fade-left'>Full stack developer and final year software engineering student. <br/>
                My passion leads me always to achieve best things in development and my normal life.
                </p>
            <div className="my_image" data-aos = 'fade-up'>
                <Image src={"/imgs/me.jpg"} width={650} height={650} priority={true} alt="me" /> 
            </div>
            <div data-aos='fade-right'>
                <p className="about_deep">My side skills</p>
                <p className="about_deep other_skills">
                    <span>Creativity</span>
                    <span>Ambitious</span>
                    <span>Passion</span>
                    <span>Team work</span>
                    <span>Leadership</span>
                </p>
            </div>
        </div>
    </section>
}


export default About