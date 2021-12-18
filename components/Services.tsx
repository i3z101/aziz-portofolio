import Image from "next/image";
import React, { FC, useState, ReactNode, useEffect } from "react";
import Divider from "./reusable-components/Divider";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import data from '../helper/data.json';
import { ServicesInerface } from "../helper/interfaces";



const Services: FC = () => {
    useEffect(():void => {
        AOS.init();
    })
    const [services, setServices] = useState<ServicesInerface[]>(data.services);
    return <section className="services_container space_sections" id="services">
        <Divider title="Services" emoji="😉" />
        <div className="space_subsection">
            {services.map((service): ReactNode => {
                return <div data-aos={service.reverse ? 'fade-right' : 'fade-left'} key={service.iconPath} className={service.reverse ? "service_details reverse" : "service_details" }>
                    <p className="service_text">{service.service}</p>
                    <div className="service_image">
                        <Image src={service.iconPath} width={150} height={150} priority={true} />
                    </div>
                </div>
            })}
        </div>
    </section>
}

export default Services;