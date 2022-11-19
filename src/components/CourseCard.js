import React from 'react';
import {Link} from "react-router-dom";

const CourseCard = ({course}) => {

    const {name, _id, price, duration, img} = course;

    return (
        <Link to={`/courseDetails/${_id}`} className="flex flex-col bg-white rounded-md dark:bg-gray-900 dark:border-white dark:border-2 shadow-md overflow-hidden"  >
            <div rel="noopener noreferrer" aria-label="Te nulla oportere reprimique his dolorum"  >
                {/* Image  */}
                <img alt="" className="object-cover w-full h-52 dark:dark:bg-gray-500" src={img} />
            </div>
            {/* Card Body  */}
            <div className="flex flex-col flex-1 p-6"  >
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-black dark:text-violet-400"  >{name}</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-black dark:dark:text-gray-400"  >
                    Duration: <span className="text-black dark:text-violet-400" >{duration} hr</span>
                </div>
            </div>
        </Link>
    );
};

export default CourseCard;