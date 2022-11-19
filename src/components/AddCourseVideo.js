import React from 'react';
import {useState} from "react";
import {useEffect} from "react";

const AddCourseVideo = () => {

    //  Submit 
    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;

        const courseid = form.courseid.value;
        const videono = form.videono.value;
        const title = form.title.value;
        const link = form.link.value;


        const newVideo = {
            courseid,
            videono,
            videoTitle: title,
            videoLink: link
        };


        const url = `http://localhost:5000/videos`;


        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newVideo)
        })
            .then(res => res.json())
            .then(fromDb => {
                if (fromDb.acknowledged) {
                    // toast.success('Service Added Successfully');
                    console.log("Succenss");
                    form.reset();
                }
            })
            .catch(err => {
                console.error(err);
                // toast.error('Service Added failed');
            });




    };

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(fromDb => {
                setCourses(fromDb);
            });
    }, []);

    return (
        <div className="">
            <div className="flex justify-center bg-white dark:bg-gray-800 mt-10">
                <div className="w-full max-w-2xl p-8 space-y-3 rounded-xl drop-shadow-2xl bg-white dark:bg-gray-900 dark:text-gray-100"  >
                    <h1 className="text-2xl font-bold text-center"  >Add Course Video</h1>
                    <form onSubmit={handleSubmit} action="" className="space-y-6 ng-untouched ng-pristine ng-valid"  >
                        <div className="space-y-1 text-sm"  >
                            <label htmlFor="password" className="block dark:text-gray-400"  >Course id</label>
                            <input type="text" required name="courseid" id="courseid" className="w-full px-4 py-3 rounded-md border border-solid border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm"  >
                            <label htmlFor="password" className="block dark:text-gray-400"  >Video no</label>
                            <input type="text" required name="videono" id="videono" className="w-full px-4 py-3 rounded-md border border-solid border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm"  >
                            <label htmlFor="username" className="block dark:text-gray-400"  >Video title</label>
                            <input type="text" required name="title" id="title" className="w-full px-4 py-3 rounded-md border border-solid border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm"  >
                            <label htmlFor="password" className="block dark:text-gray-400"  >Video Link</label>
                            <input type="text" required name="link" id="link" className="w-full px-4 py-3 rounded-md border border-solid border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>

                        <button type="submit" className="block w-full p-3 text-center rounded-lg bg-violet-100 hover:bg-violet-200 dark:text-gray-900 dark:bg-violet-400"  >Add</button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col items-center bg-white dark:bg-gray-800 mt-10">
                <h3 className="text-2xl font-bold text-center">All Courses</h3>
                {
                    courses.map((course) => <>
                        <div className="w-full mt-2 max-w-2xl p-8 space-y-3 rounded-xl drop-shadow-2xl bg-white dark:bg-gray-900 dark:text-gray-100">
                            <p>ID : <span className="text-blue-500"> {course._id}</span> </p>
                            <h2>Name: <span className="text-blue-500">{course.name}</span> </h2>
                        </div>
                    </>)
                }
            </div>

        </div>


    );
};

export default AddCourseVideo;;

