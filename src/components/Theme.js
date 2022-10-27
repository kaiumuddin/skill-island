import React from 'react';
import {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const Theme = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => false);

    if (isDarkMode) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }


    return (

        <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={50}
        />
    );
};

export default Theme;