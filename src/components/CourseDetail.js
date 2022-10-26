import React from 'react';
import {useLoaderData} from "react-router-dom";

const CourseDetail = () => {

    const singleCourse = useLoaderData();

    const {id, name, price, duration};

    return (
        <div>
            CourseDetail
        </div>
    );
};

export default CourseDetail;