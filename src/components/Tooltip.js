import React, {useContext} from 'react';
import {AuthContext} from "../contexts/UserContext";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional


const Tooltip = () => {
    const {user} = useContext(AuthContext);
    const {displayName} = user;

    return (
        <Tippy content={displayName}>
            <img data-tooltip-target="tooltip-jese" className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
        </Tippy>
    );
};

export default Tooltip;