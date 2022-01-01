import React, { FC, ReactNode, useEffect } from "react";
import Divider from "./reusable-components/Divider";
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3, DiJavascript1, DiNodejsSmall, DiReact, DiPhp, DiJava, DiMongodb, DiFirebase} from 'react-icons/di';
import {SiNextdotjs, SiTypescript, SiLaravel, SiC, SiAmazonaws, SiMysql, SiFirebase, SiBootstrap, SiTailwindcss} from 'react-icons/si';
import { IconBaseProps } from "react-icons/lib";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { SkillsInterface } from "../helper/interfaces";
import { ICON_COLOR, ICON_SIZE } from "../helper/default-value";




const skills: SkillsInterface[] = [
    {
        skillName: "HTML",
        icon: <AiFillHtml5 color={ICON_COLOR} size={ICON_SIZE} />
    },
    {
        skillName: "CSS",
        icon: <DiCss3 color={ICON_COLOR} size={ICON_SIZE}/>
    },
    {
        skillName: "JS",
        icon: <DiJavascript1 color={ICON_COLOR} size={ICON_SIZE}/>
    },
    {
        skillName: "TS",
        icon: <SiTypescript color={ICON_COLOR} size={ICON_SIZE}/>
    },
    {
        skillName: "NODEJS",
        icon: <DiNodejsSmall color={ICON_COLOR} size={ICON_SIZE}/>
    },
    {
        skillName: "REACTJS",
        icon: <DiReact color={ICON_COLOR} size={ICON_SIZE}/>
    },
    {
        skillName: "NEXTJS",
        icon: <SiNextdotjs color={ICON_COLOR} size={ICON_SIZE}/>
    },
    {
        skillName: "REACT NATIVE",
        icon: <DiReact color={ICON_COLOR} size={ICON_SIZE}/>
    },
    {
        skillName: "PHP",
        icon: <DiPhp color={ICON_COLOR} size={ICON_SIZE}/>
    },
    {
        skillName: "LARAVEL",
        icon: <SiLaravel color={ICON_COLOR} size={ICON_SIZE}/>
    },
    {
        skillName: "C",
        icon: <SiC color={ICON_COLOR} size={ICON_SIZE}/>
    },
    {
        skillName: "JAVA",
        icon: <DiJava color={ICON_COLOR} size={ICON_SIZE}/>
    },
    {
        skillName: "BOOT STRAP",
        icon: <SiBootstrap color={ICON_COLOR} size={ICON_SIZE}/>
    },
    {
        skillName: "Tailwind CSS",
        icon: <SiTailwindcss color={ICON_COLOR} size={ICON_SIZE}/>
    },
    {
        skillName: "MYSQL",
        icon: <SiMysql color={ICON_COLOR} size={ICON_SIZE}/>
    },
    {
        skillName: "MONGO DB",
        icon: <DiMongodb color={ICON_COLOR} size={ICON_SIZE}/>
    },
    {
        skillName: "FIREBASE",
        icon: <SiFirebase color={ICON_COLOR} size={ICON_SIZE}/>
    },
    {
        skillName: "AWS",
        icon: <SiAmazonaws color={ICON_COLOR} size={ICON_SIZE}/>
    },
];

const Skills: FC = ()=> {
    useEffect(():void => {
        AOS.init();
    })
    return <section className="space_sections" id="skills">
        <Divider title="Skills" emoji="😎" />
        <div className="icons_container">
            {skills.map((skill): ReactNode => {
                return <div key={skill.skillName} className="icon_box" data-aos= "fade-up">
                    <div className="icon_container">
                        {skill.icon}
                    </div>
                    <p className="skill_name">{skill.skillName}</p>
                </div>
            })}
        </div>
    </section>
}

export default Skills;