import React, { FC } from "react";
import About from "./About";
import Contacts from "./Contacts";
import Footer from "./Footer";
import FulFillment from "./Fulfillment";
import HeaderVid from "./Header";
import Nav from "./Nav";
import Projects from "./Projects";
import Services from "./Services";
import Skills from "./Skills";


const Layout: FC = () => {
    return <div>
        <Nav/>
        <HeaderVid/>
        <About/>
        <Services/>
        <Projects/>
        <Skills/>
        <FulFillment/>
        <Contacts/>
        <Footer/>
    </div>
}


export default Layout;

