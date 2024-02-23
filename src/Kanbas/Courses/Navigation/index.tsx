import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import './index.css';

export default function CourseNavigation() {
    const { pathname } = useLocation();

    const links = [ "Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People"];
    return(
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            {links.map((link, index) => (
                <Link to={link} key={index} style={{ textDecoration: 'none' }}>
                    <li>
                        <p className={pathname?.includes(link) ? "course-nav-item-active": "course-nav-item"}>{link}</p>
                    </li>
                </Link>
            ))}
        </ul>
    );
}