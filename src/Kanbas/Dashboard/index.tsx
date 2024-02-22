import { courses } from '../Database';
import { FaEdit, FaCircle } from "react-icons/fa";
import './index.css';
import { Link } from 'react-router-dom';
import KanbasNavigation from '../Navigation';

export default function Dashboard() {
    return (
        <div className="d-flex">
          <KanbasNavigation />
          <div style={{ flexGrow: 1 }}>
            <h1>Dashboard</h1>
            <hr/>
            <h2 style={{ marginLeft: 30 }}>Published Courses ({courses.length})</h2>
            <hr/>

            <div className="course-container">
                {courses.map((course, index) => (
                    <Link to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none" }}  key={index}>
                    <CourseCard course={course}/>
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