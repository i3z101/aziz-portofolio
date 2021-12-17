import React, { FC } from "react";


const HeaderVid: FC = () => {
    return <header className="header_container">
        <video src={'/imgs/header.mp4'} autoPlay={true} preload="auto" playsInline={true} onContextMenu={()=> {return false}} muted loop></video>
    </header>
}

export default HeaderVid