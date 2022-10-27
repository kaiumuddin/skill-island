import React from 'react';
import {Link, useLoaderData} from "react-router-dom";
import Pdf from "react-to-pdf";
import {FaDownload} from "react-icons/fa";


const ref = React.createRef();

const CourseDetail = () => {

    const singleCourse = useLoaderData();

    const {id, name, price, duration} = singleCourse;

    return (
        <>
            <div className="h-screen w-screen bg-white-100 dark:bg-gray-800">
                <section ref={ref} className="bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-2 dark:shadow-white  md:w-7/12 mx-auto shadow-md" >
                    <div className="container flex flex-col mx-auto lg:flex-row" >
                        <div className="flex justify-between py-4 px-8">
                            <div className="mb-2 " >
                                <h2 className="text-xl font-semibold tracking-wide" >{name}</h2>
                            </div>
                            <Pdf targetRef={ref} filename="code-example.pdf">
                                {({toPdf}) => <button onClick={toPdf}><FaDownload></FaDownload></button>}
                            </Pdf>
                        </div>
                        <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800" >
                            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12" >
                                <img src="https://source.unsplash.com/640x480/" alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                            </div>
                        </div>
                        <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-900 dark:text-white" >


                            <div className="flex space-x-2 sm:space-x-4" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" ></path>
                                </svg>
                                <div className="space-y-2" >
                                    <p className="text-lg font-medium leading-snug" >Lorem ipsum dolor sit amet</p>
                                    <p className="leading-snug" >Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                                </div>
                            </div>
                            <div className="flex space-x-2 sm:space-x-4" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" ></path>
                                </svg>
                                <div className="space-y-2" >
                                    <p className="text-lg font-medium leading-snug" >Lorem ipsum dolor sit amet</p>
                                    <p className="leading-snug" >Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                                </div>
                            </div>
                            <div className="flex space-x-2 sm:space-x-4" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" ></path>
                                </svg>
                                <div className="space-y-2" >
                                    <p className="text-lg font-medium leading-snug" >Lorem ipsum dolor sit amet</p>
                                    <p className="leading-snug" >Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                                </div>
                            </div>
                            <Link to={`/checkout/${id}`} type="button" className="px-8 py-3 font-semibold rounded-full bg-blue-300  dark:bg-gray-100 dark:text-gray-800 text-center" >Get Premium Accesss</Link>
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
};

export default CourseDetail;