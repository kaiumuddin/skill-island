import React from 'react';
import {useContext} from "react";
import {useState} from "react";
import {useEffect} from "react";
import {AuthContext} from "../contexts/UserContext";
import MyCourseCard from "./MyCourseCard";


const MyCourses = () => {

    const {user} = useContext(AuthContext);
    const [mycourses, setMyCourses] = useState([]);

    useEffect(() => {


        const url = `https://skill-island-server.vercel.app/mycourses/${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(fromDb => {
                setMyCourses(fromDb);
            });
    }, []);

    return (
        <div className="container mx-auto flex justify-center items-center">
            <div className="flex flex-col w-full p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100"
            >
                <h2 className="text-xl font-semibold" >Your enrolled Courses </h2>
                <ul className="flex flex-col gap-5" >

                    {
                        mycourses.map(course => <MyCourseCard key={course._id} course={course}></MyCourseCard>)
                    }



                </ul>
            </div>
        </div>
    );
};

export default MyCourses;