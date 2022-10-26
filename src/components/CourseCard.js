import React from 'react';
import {Link} from "react-router-dom";

const CourseCard = ({course}) => {

    const {name, id, price, duration} = course;

    return (
        <Link to={`/courseDetails/${id}`} className="flex flex-col bg-white rounded-md dark:dark:bg-gray-900 shadow-md overflow-hidden"  >
            <div rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"  >
                <img alt="" className="object-cover w-full h-52 dark:dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
            </div>
            <div className="flex flex-col flex-1 p-6"  >
                <p className="text-xs tracking-wider uppercase hover:underline dark:dark:text-violet-400"  >Computer Science</p>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug"  >{name}</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:dark:text-gray-400"  >
                    <span  >{duration} hr</span>
                    <span  >{price} $</span>
                </div>
            </div>
        </Link>
    );
};

export default CourseCard;