import React, {useContext} from 'react';
import {AuthContext} from "../contexts/UserContext";

const Tooltip = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <div id="tooltip-jese" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-black bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                Jese Leos
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <img data-tooltip-target="tooltip-jese" className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
        </div>
    );
};

export default Tooltip;

