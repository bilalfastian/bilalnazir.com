import React, { Component } from "react";
import "./DarkModeSwitch.css";
import ThemeContext from "../../contexts/theme";

export default function DarkModeSwitch() {
    const {dark, toggleDark} = React.useContext(ThemeContext);

    return (
        <a href="#" onClick={toggleDark}>
            {/*<img src="/images/dark-light-icon.svg" alt="toggle dark mode"/>*/}
            <svg className="theme-switch" xmlns="http://www.w3.org/2000/svg" width="27.012" height="27.012" viewBox="0 0 27.012 27.012">
                <path id="Icon_weather-moon-alt-third-quarter" data-name="Icon weather-moon-alt-third-quarter" d="M4.488,17.328a13.306,13.306,0,0,1,1.068-5.244,13.633,13.633,0,0,1,2.88-4.308,13.489,13.489,0,0,1,14.8-2.88,13.688,13.688,0,0,1,4.32,2.88A13.647,13.647,0,0,1,31.5,17.328a13.263,13.263,0,0,1-1.068,5.244,13.688,13.688,0,0,1-2.88,4.32,13.231,13.231,0,0,1-4.32,2.88,13.408,13.408,0,0,1-10.488,0,13.633,13.633,0,0,1-4.308-2.88,13.231,13.231,0,0,1-2.88-4.32A13.306,13.306,0,0,1,4.488,17.328Zm1.44,0a11.806,11.806,0,0,0,.96,4.692,12.132,12.132,0,0,0,2.58,3.852,12.334,12.334,0,0,0,3.852,2.58,11.587,11.587,0,0,0,4.68.96h.252V5.268H18a11.792,11.792,0,0,0-4.68.96,12.132,12.132,0,0,0-3.852,2.58,12.334,12.334,0,0,0-2.58,3.852A11.572,11.572,0,0,0,5.928,17.328Z" transform="translate(-4.488 -3.828)"/>
            </svg>
        </a>
    );
}