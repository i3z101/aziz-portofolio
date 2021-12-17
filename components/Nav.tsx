import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
const Nav: FC = () => {
    return <nav className="nav_container">
        <Image src={"/imgs/logo.svg"} width={250} height={250} className="logo" alt="logo" />
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
            <Link href={"#contacts"}>
                <a className="nav_link">Contacts</a>
            </Link>
        </div>
    </nav>
}

export default Nav;