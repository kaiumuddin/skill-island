import React from 'react';
import {FaTrash} from 'react-icons/fa';
import {FaArrowAltCircleRight} from 'react-icons/fa';
import {Link} from "react-router-dom";

const MyCourseCard = ({course}) => {

    const {_id, courseId, name} = course;

    return (
        <li className="flex flex-col py-6 sm:flex-row sm:justify-between shadow-lg p-5 rounded-lg dark:bg-gray-800" >
            <div className="flex w-full space-x-2 sm:space-x-4 s" >
                <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                    src="https://i.ibb.co/m6R0d7t/dm.webp" alt="Polaroid camera" />
                <div className="flex flex-col justify-between w-full pb-4" >
                    <div className="flex justify-between w-full pb-2 space-x-2" >
                        <div className="space-y-1" >
                            <h3 className="text-lg font-semibold leading-snug sm:pr-8" >
                                {name}</h3>
                        </div>
                        {/* <div className="text-right" >
                            <p className="text-lg font-semibold" >Completed 70%</p>
                        </div> */}
                    </div>
                    <div className="flex text-sm" >
                        <Link to={`/courselessons/${courseId}`} type="button" className="flex items-center px-2 py-1 space-x-1 text-green-600"
                        >
                            <span >Continue to Lesson</span>
                            <FaArrowAltCircleRight></FaArrowAltCircleRight>
                        </Link>
                        <Link type="button" className="flex items-center px-2 py-1 pl-0 space-x-1 text-red-700"
                        >
                            <span >Unenroll</span>
                            <FaTrash></FaTrash>
                        </Link>

                    </div>
                </div>
            </div>
        </li>
    );
};

export default MyCourseCard;