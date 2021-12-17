import React, { FC } from "react";

const Footer: FC = () => {
    return <footer className="footer">
        <p>Made By Aziz - {new Date().getFullYear()}</p>
        <p>All rights reserved &copy;</p>
    </footer>
}

export default Footer;