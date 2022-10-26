import React from 'react';

const Tooltip = () => {

    const src = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80";

    return (
        <div>
            <div id="tooltip-jese" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                Jese Leos
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <img data-tooltip-target="tooltip-jese" className="w-10 h-10 rounded" src={src} alt="Medium avatar" />
        </div>
    );
};

export default Tooltip;
