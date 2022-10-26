import React from 'react';
import {useLoaderData} from "react-router-dom";
import CourseCard from "./CourseCard";
import Sidebar from "./Sidebar";

const Courses = () => {

    const loadedData = useLoaderData();
    console.log(loadedData);

    return (
        <div className="flex">
            <Sidebar loadedData={loadedData}></Sidebar>
            <section className="py-6 sm:py-12 dark:dark:bg-gray-800 dark:dark:text-gray-100"  >
                <div className="container p-6 mx-auto space-y-8"  >
                    <div className="space-y-2 text-center"  >
                        <h2 className="text-3xl font-bold"  >Available Courses</h2>
                        <p className="font-serif text-sm dark:dark:text-gray-400"  >Get the best course among internet</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4"  >
                        {
                            loadedData.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Courses;