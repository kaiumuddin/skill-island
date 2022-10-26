import React, {useContext} from 'react';
import {AuthContext} from "../contexts/UserContext";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional


const Tooltip = () => {
    const {user} = useContext(AuthContext);
    const {displayName, photoURL} = user;

    if (photoURL === null) {
        window.location.reload(true);
    }

    return (
        <Tippy content={displayName}>
            {user?.photoURL ?
                <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
                :
                <p>nai</p>
            }
        </Tippy>
    );
};

export default Tooltip;