import React, { FC, useEffect } from "react";


const HeaderVid: FC = () => {
    useEffect(():void => {
        const body: HTMLBodyElement | null = document.querySelector('body');
        const video: HTMLVideoElement | null = document.querySelector('video');
        body?.addEventListener('touchend', ()=> {
            if(video instanceof HTMLVideoElement) {
                video.play();
            }
        })
    }, [])
    return <header className="header_container">
        <video src={'/imgs/header.mp4'} autoPlay={true} preload="auto" playsInline={true} onContextMenu={()=> {return false}} muted loop></video>
    </header>
}

export default HeaderVid