import { IconBaseProps } from "react-icons";

export interface ContactsInterface {
    link: string,
    icon: IconBaseProps
}

export interface ProjectInterface {
    name: string,
    description: string,
    imagePath: string,
    url: string
}

export interface ServicesInerface {
    service: string,
    iconPath: string,
    reverse: boolean
}

export interface SkillsInterface {
    skillName: string,
    icon: IconBaseProps,
}