import React, { FC } from "react";
import Divider from "./reusable-components/Divider";


const Fulfillment: FC = () => {
    return <section className="space_sections" id="fulfillments">
        <Divider title="Fulfillments" emoji="👏" />
        <ul className="fulfillment">
            <li>Best graduation project in the university - 2022</li>
            <li>Software engineering course for University Malayasia Pahang arabian studuents - 2021</li>
            <li>3rd place in Malaysian Technology Expo competition during COVID-19 - 2020</li>
        </ul>
    </section>
}

export default Fulfillment;