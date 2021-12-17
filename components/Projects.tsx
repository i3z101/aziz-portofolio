import Image from "next/image";
import React, { FC, ReactNode, useEffect, useState } from "react";
import Divider from "./reusable-components/Divider";
import {NextRouter, useRouter} from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Aos from "aos";
import data from '../helper/data.json';

interface ProjectInterface {
    name: string,
    description: string,
    imagePath: string,
    url: string
}

const Projects: FC = () => {
    const router:NextRouter = useRouter();
    useEffect((): void=> {
        AOS.init();
    })
    const [projects, setProjects] = useState<ProjectInterface[]>(data.projects);


    return <section className="space_sections" id="projects">
        <Divider title="Projects" emoji="✌" />
        {projects.map((project): ReactNode => {
            return <a key={project.name} className="card_container" href={project.url} target='_blank' rel='noreferrer'>
            <div className="card_image sub" >
                <img src={project.imagePath} />
            </div>
            <div className="project_text_container" data-aos="fade-up">
                <p className="project_name">{project.name}</p>
                <p className="project_desc">{project.description}</p>
                <p className="click_visit">Click to visist</p>
            </div>
        </a>
        })}
    </section>
}

export  default Projects;