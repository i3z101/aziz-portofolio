import React, { FC } from "react";

interface DividerInterFace {
    title: string;
    emoji?: string
}

const Divider: FC<DividerInterFace> = ({title, emoji}: DividerInterFace) => {
    return <div className="divider_container">
            <div className="divider"></div>
                <div>
                    <span className="title_divider">{title}</span>
                    <span className="emoji_divider">{emoji}</span>
                </div>
            <div className="divider"></div>
        </div>
}

export default Divider