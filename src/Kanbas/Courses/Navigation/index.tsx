import { useParams } from "react-router";
import { Link } from "react-router-dom";


export default function CourseNavigation() {
    const { pathname } = useParams()

    const links = [ "Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People"];

    return(
        <ul>
            {links.map((link, index) => (
                <Link to={link} key={index}>
                    <li className={pathname?.includes(link) ? "course-nav-item-active": "course-nav-item"}>
                        {link}
                    </li>
                </Link>
            ))}
        </ul>
    );
}