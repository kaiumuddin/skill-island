import React from 'react';
import {Link, useLoaderData} from "react-router-dom";
import Pdf from "react-to-pdf";
import {FaDownload} from "react-icons/fa";
import {useContext} from "react";
import {AuthContext} from "../contexts/UserContext";


const ref = React.createRef();

const CourseDetail = () => {

    const {user} = useContext(AuthContext);
    console.log(user.email);

    const singleCourse = useLoaderData();


    const {_id, name, duration, img, description} = singleCourse;


    const handleEnrol = () => {

        const newCourse = {
            courseId: _id,
            name,
            email: user.email
        };

        console.log(newCourse);

        const url = `http://localhost:5000/enrole`;


        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newCourse)
        })
            .then(res => res.json())
            .then(fromDb => {
                if (fromDb.acknowledged) {
                    // toast.success('Service Added Successfully');
                    console.log("Succenss");
                    // form.reset();
                }
            })
            .catch(err => {
                console.error(err);
                // toast.error('Service Added failed');
            });
    };

    return (
        <>
            <div className="h-screen w-screen  py-5 bg-white-100 dark:bg-gray-800">
                <section ref={ref} className="bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-2 dark:shadow-white  md:w-7/12 mx-auto shadow-md" >
                    <div className="container flex flex-col mx-auto " >

                        {/* Header  */}
                        <div className="flex justify-between py-4 px-8">
                            <div className="mb-2 " >
                                <h2 className="text-xl font-semibold tracking-wide" >{name}</h2>
                            </div>

                            {/* react to pdf  */}
                            <Pdf targetRef={ref} filename="downloaded.pdf">
                                {({toPdf}) => <button onClick={toPdf}><FaDownload></FaDownload></button>}
                            </Pdf>
                        </div>

                        {/* Image  */}
                        <div className=" dark:bg-gray-800" >
                            <div className="w-full flex items-center justify-center p-4 md:p-8 lg:p-12" >
                                <img src={img} alt="" className="rounded-lg shadow-lg object-cover dark:bg-gray-500 aspect-video" />
                            </div>
                        </div>

                        {/* Body  */}
                        <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 dark:bg-violet-900 dark:text-white" >

                            <div className="flex  space-x-2 sm:space-x-4" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" ></path>
                                </svg>
                                <div className="space-y-2" >
                                    <p className="text-lg font-medium leading-snug" >Desciption</p>
                                    <p className="leading-snug" >{description}</p>
                                </div>
                            </div>

                            <div className="flex space-x-2 sm:space-x-4" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" ></path>
                                </svg>
                                <div className="space-y-2" >
                                    <p className="text-lg font-medium leading-snug" >Duration : {duration} hr</p>
                                </div>
                            </div>

                            {/* <Link to={`/checkout/${id}`} type="button" className="px-8 py-3 font-semibold rounded-full bg-blue-300  dark:bg-gray-100 dark:text-gray-800 text-center" >Get Premium Accesss</Link> */}
                            <button onClick={handleEnrol} type="button" className="px-8 py-3 font-semibold rounded-full bg-blue-300  dark:bg-gray-100 dark:text-gray-800 text-center" >Enrole</button>
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
};

export default CourseDetail;