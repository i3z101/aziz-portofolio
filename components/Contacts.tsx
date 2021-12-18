import React, { FC, ReactNode } from "react";
import Divider from "./reusable-components/Divider";
import {SiWhatsapp, SiMaildotru, SiLinkedin, SiGithub, SiTwitter, SiInstagram} from 'react-icons/si';
import { IconBaseProps } from "react-icons/lib";
import { ContactsInterface } from "../helper/interfaces";
import { ICON_COLOR, ICON_SIZE } from "../helper/default-value";





const contacts: ContactsInterface[] = [
    {
        link: "https://wa.link/a2u70v",
        icon: <SiWhatsapp color={ICON_COLOR} size={ICON_SIZE}/>
    },
    {
        link: "mailto:ab.ah.bq@gmail.com",
        icon: <SiMaildotru color={ICON_COLOR} size={ICON_SIZE}/>
    },
    {
        link: "https://www.linkedin.com/in/abdulaziz-baqaleb-1b7752203/",
        icon: <SiLinkedin color={ICON_COLOR} size={ICON_SIZE}/>
    },
    {
        link: "https://github.com/i3z101",
        icon: <SiGithub color={ICON_COLOR} size={ICON_SIZE}/>
    },
    {
        link: "https://twitter.com/i_3z1001",
        icon: <SiTwitter color={ICON_COLOR} size={ICON_SIZE}/>
    },
    {
        link: "https://www.instagram.com/i_3z101",
        icon: <SiInstagram color={ICON_COLOR} size={ICON_SIZE}/>
    },
] 

const Contacts: FC = ()=> {
    return <section className="space_section" id="contacts"> 
        <Divider title="Contacts" emoji="👋" />
        <div className="icons_container space_subsection">
            {contacts.map((contact): ReactNode => {
                return <a href={contact.link} key={contact.link} className="icon_box" data-aos= "fade-up" target='_blank'  rel='noreferrer'>
                    <div className="icon_container">
                        {contact.icon}
                    </div>
                </a>
            })}
        </div>
    </section>
} 

export default Contacts;