import React, { useState } from "react";
import { FaEdit, FaCircle } from "react-icons/fa";
import './index.css';
import { Link } from 'react-router-dom';
import KanbasNavigation from '../Navigation';

export default function Dashboard(
    { 
        courses, 
        course, 
        setCourse, 
        addNewCourse,
        deleteCourse, 
        updateCourse 
    } : {
        courses: any[]; 
        course: any; 
        setCourse: (course: any) => void;
        addNewCourse: () => void; 
        deleteCourse: (course: any) => void;
        updateCourse: () => void; 
    }
) {

    return (
        <div className="d-flex">
          <KanbasNavigation />
          <div style={{ flexGrow: 1 }}>
            <h1>Dashboard</h1>
            <h5>Course</h5>
            <input value={course.name} className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <input value={course.number} className="form-control"
                onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
            <input value={course.startDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
            <input value={course.endDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
            <button onClick={addNewCourse} >
                Add
            </button>
            <hr/>
            <h2 style={{ marginLeft: 30 }}>Published Courses ({courses.length})</h2>
            <hr/>

            <div className="course-container">
                {courses.map((course, index) => (
                    <Link to={`/Kanbas/Courses/${course._id}/Home`}
                        style={{ textDecoration: "none" }}  key={index}
                    >
                        <CourseCard course={course}/>
                        <button onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                            }}
                        >
                            Edit
                        </button>
                        <button onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                            }}
                        >
                                Delete
                        </button>
                        <button onClick={(event) => {
                            event.preventDefault();
                            updateCourse();
                        }} >
                            Update
                        </button>
                    </Link>
                ))}
            </div>
        </div>
        </div>
    );
}

function CourseCard({course}: {course: any}): JSX.Element {
    return (
        <div className='course-card'>
            <img src={`/images/${course.image}`}/>
            <div className='course-card-info-section'>
                <p className='course-card-info-section-id'>{course.number} {course._id}</p>
                <h4>{course.name}</h4>
                <p className='course-card-info-section-dates'>{course.startDate} to {course.endDate}</p>
                <FaEdit className='edit-button'/>
            </div>
        </div>
    );
}