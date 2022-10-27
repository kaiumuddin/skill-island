import React, {useContext} from 'react';
import {AuthContext} from "../contexts/UserContext";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import {FaUserAlt} from 'react-icons/fa';

const Tooltip = () => {
    const {user} = useContext(AuthContext);

    return (
        <Tippy content={user?.displayName}>
            {user?.photoURL ?
                <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
                :
                <div className="w-10 h-10 flex justify-center items-center"><FaUserAlt></FaUserAlt></div>
            }
        </Tippy>
    );
};

export default Tooltip;