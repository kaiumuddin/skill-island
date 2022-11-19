import React from 'react';
import {useContext} from "react";
import {FaDownload} from "react-icons/fa";
// import './Certificate.module.css';
import ReactToPdf from "react-to-pdf";
import {AuthContext} from "../contexts/UserContext";

const ref = React.createRef();

const Certificate = () => {

    const {user} = useContext(AuthContext);
    console.log(user);

    const date = Date();

    const options = {
        orientation: 'landscape',
        unit: 'px',
        format: [1200, 900]
    };

    return (
        <>
            <ReactToPdf targetRef={ref} options={options} scale={1.75} filename="downloaded.pdf">
                {({toPdf}) => <button onClick={toPdf}><FaDownload></FaDownload></button>}
            </ReactToPdf>
            <section className="flex justify-center items-center h-screen">
                <div ref={ref} className="w-[1200px] h-[900px] border-blue-500 border-[40px] p-10 bg-cyan-50">
                    <div className="mt-20">
                        <h3 className="text-center text-4xl uppercase">Certificate Of Completion</h3>
                        <p className="text-center mt-10 text-2xl" >This is to certify that</p>
                        <h2 className="text-center mt-8 text-6xl uppercase">{user.displayName}</h2>
                        <p className="text-center">-------------------------------------------------------------------------------------------------------------------------------</p>
                        <p className="text-center mt-10 text-2xl">has completed the course</p>
                        <h2 className="text-center text-4xl">Course Name</h2>
                    </div>
                    <div className="flex justify-between items-start mt-40">
                        <div>
                            <h3>John Walker</h3>
                            <div className="w-24 h-1 bg-black "></div>
                            <h5>
                                Skill Island
                            </h5>
                        </div>
                        <div>Date</div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Certificate;