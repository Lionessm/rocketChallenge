import React, { useState, useEffect } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon} from "@fortawesome/free-solid-svg-icons";
import {faSun} from "@fortawesome/free-solid-svg-icons";

const ThemeChanger = () => {
    const [themeState, setThemeState] = useState(false);

    const handleChange = () => {
        setThemeState(!themeState);
        if (themeState) {
            localStorage.setItem('Theme', 'dark');
            document.body.classList.add('dark-mode');
        } else {
            localStorage.setItem('Theme', 'light');
            document.body.classList.remove('dark-mode');
        }

    }

    useEffect(() => {
        const getTheme = localStorage.getItem('Theme');
        if (getTheme === 'dark') return  document.body.classList.add('dark-mode');
    })

    return (
        <div>
            <button onClick={handleChange} className="app__dark-mode-btn icon level-right">
                {themeState ?  <FontAwesomeIcon icon={faSun}/> :  <FontAwesomeIcon icon={faMoon}/>}
            </button>
        </div>
    )
}

export default ThemeChanger;
