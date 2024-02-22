import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt } from "react-icons/fa";
import './index.css'

function KanbasNavigation() {
    const links = [
        {name: 'Account', icon: <FaTachometerAlt className="fs-2"/>},
        {name: 'Dashboard', icon: <FaRegUserCircle className="fs-2"/>},
        {name: 'Courses', icon: <FaBook className="fs-2"/>},
        {name: 'Calender', icon: <FaRegCalendarAlt className="fs-2"/>},
    ];

    const { pathname } = useLocation();

    return (
        <ul className="nav-container">
            {links.map((link) => (
                <li key={link.name} className={pathname.includes(link.name) ? "nav-item active" : "nav-item"}>
                    <Link to={`/Kanbas/${link.name}`}
                        className={pathname.includes(link.name) ? "active" : "nav-item"}>
                        <>{link.icon}{link.name}</>
                    </Link>
                </li>
            ))}
        </ul>    
    );
}

export default KanbasNavigation;