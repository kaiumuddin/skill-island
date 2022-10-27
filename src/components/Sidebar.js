import React from 'react';
import {Link} from "react-router-dom";

const Sidebar = ({loadedData}) => {

    return (
        <aside className="md:w-64 shadow-md" aria-label="Sidebar">
            <div className="h-full overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-gray-800">
                <h1 className="p-2 text-2xl text-black dark:text-white">Courses</h1>
                <div className="h-1 bg-gray-300 dark:bg-white "></div>
                <div className="md:hidden mt-4 text-black dark:text-white flex flex-wrap gap-2">
                    {
                        loadedData.map(course =>
                            <Link to={`/courseDetails/${course.id}`} key={course.id} className="rounded-full border-2 boder-white px-3 py-2">
                                <span >{course.name}</span>
                            </Link>
                        )
                    }
                </div>
                <ul className="space-y-2 hidden md:block">
                    {
                        loadedData.map(course =>
                            <li key={course.id}>
                                <Link to={`/courseDetails/${course.id}`} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                    <span className="ml-3">{course.name}</span>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </aside>

    );
};

export default Sidebar;