import React from "react";
import Typed from 'react-typed';
import PageTitle from '../PageTitle/PageTitle';
import ThemeContext from "../../contexts/theme";
import "./NameWithDesignation.css";

export default function NameWithDesignation({ text, roles }) {
    // const roles = ['FULL STACK DEVELOPER', 'SALESFORCE CRM DEVELOPER', 'MVP BUILDER'];

    if (text) {
        return(
            <div className={" title-typed"}>
                <PageTitle text={text}/>
                <h1 className={"typed-title"}>
                    <span>&nbsp;</span>
                    <Typed
                        strings={roles}
                        typeSpeed={40}
                        backSpeed={50}
                        backDelay={1500}
                        loop
                    />
                </h1>
            </div>
        )

    }
    return null;
}
