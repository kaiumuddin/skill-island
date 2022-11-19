import React from 'react';
import {useState} from "react";
import {FaPlay} from "react-icons/fa";
import {Link, useLoaderData} from "react-router-dom";

const CourseLessons = () => {


    const videos = useLoaderData();


    const [currentVideo, setCurrentVideo] = useState(0);


    const handlePrev = () => {
        if (currentVideo > 0) {
            setCurrentVideo((p) => p - 1);
        }

    };
    const handleNext = () => {
        if (currentVideo < videos.length - 1) {
            setCurrentVideo((p) => p + 1);
        }
    };

    return (
        <div className="container mx-auto mt-10 grid grid-cols-1 gap-10 place-items-center">

            <div>
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videos[currentVideo].videoLink}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture"
                    allowFullScreen
                ></iframe>

            </div >

            <div>
                <h3 className="text-xl font-bold">{videos[currentVideo].videoTitle}</h3>
            </div>
            <div className="flex gap-5">
                <button onClick={handlePrev} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Prev
                </button>
                <button onClick={handleNext} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Next
                </button>
                <Link to="/certificate" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Certificate</Link>
            </div>

            <div className="w-full">
                {
                    videos.map((video, idx) => <>
                        <div key={video._id} className={`rounded-lg h-20 p-5 mt-2 drop-shadow-lg text-center flex justify-between items-center ${parseInt(video.videono) === currentVideo + 1 ? "bg-blue-100" : "bg-white"} `}>

                            <h5 className="text-gray-900 text-xl font-medium mb-2">{video.videono}</h5>
                            <h5 className="text-gray-900 text-xl font-medium mb-2">{video.videoTitle}</h5>


                            <button onClick={() => setCurrentVideo(idx)} type="button" className=" inline-block p-4 text-center bg-blue-500 text-white font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"><FaPlay></FaPlay></button>
                        </div>
                    </>)
                }

            </div>
        </div>

    );
};

export default CourseLessons;