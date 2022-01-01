import React, { FC, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {AiOutlineArrowUp} from 'react-icons/ai';
import { ICON_SIZE } from "../helper/default-value";
const Nav: FC = () => {

    useEffect(():void => {
        const toUp: HTMLDivElement | null = document.querySelector('.to_up');
        window.addEventListener('scroll', ()=> {
            if(window.scrollY > 120) {
                toUp?.classList.add('show_up')
            }else {
                toUp?.classList.remove('show_up')
            }
        })
    }, [])

    const onTopUp = (): void => {
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        })
    }

    return <nav className="nav_container">
        <Image src={"/imgs/logo.svg"} priority={true} width={250} height={250} className="logo" alt="logo" />
        <div className="nav_list_container">
            <Link href={"#about"}>
                <a className="nav_link">About me</a>
            </Link>
            <Link href={"#projects"}>
                <a className="nav_link">Projects</a>
            </Link>
            <Link href={"#skills"}>
                <a className="nav_link">Skills</a>
            </Link>
            <Link href={"#services"}>
                <a className="nav_link">Services</a>
            </Link>
            <Link href={"#fulfillments"}>
                <a className="nav_link">Fulfillments</a>
            </Link>
            <Link href={"#contact"}>
                <a className="nav_link">Contact</a>
            </Link>
        </div>
        <div className="to_up" onClick={onTopUp.bind(this)}>
            <AiOutlineArrowUp color="black" size={ICON_SIZE} />
        </div>
    </nav>
}

export default Nav;