import { FaCheckCircle, FaEllipsisV, FaPlus, FaPlusCircle } from "react-icons/fa";
import './index.css';
import { assignments } from '../../Database';
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Assignments() {
    const { courseId } = useParams()

    return(
        <>
            <div>
                <input placeholder="Search For Assignment" className="assignments-input"/>
                <button className="assignments-button-reg"><FaPlus />Group</button>
                <button className="assignments-button-assignments"><FaPlus />Assignment</button>
                <button className="module-button-reg"><FaEllipsisV /></button>
                <hr />
            </div>
            <ul className="list-group">
                <li className="list-group-item" style={{ backgroundColor: 'lightgray', padding: 0, paddingTop: 8, borderRadius: 0 }}>
                    <div>
                        <FaEllipsisV className="me-2" />
                        ASSIGNMENTS
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    {assignments.filter((assignment) => assignment.course === courseId)
                    .map((assignment, index) => (
                        <li
                            key={index}
                            className="list-group-item row"
                            // style={{ cursor: 'pointer' }}
                        > 
                            <div>
                            <FaEllipsisV className="me-2" />
                            <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                {`A${index + 1} - ${assignment.title}`}
                            </Link>
                                {/* Multiple Modules | Due whenever | x pts */}
                            <span className="float-end">
                                <FaCheckCircle className="text-success" />
                                <FaEllipsisV className="ms-2" />
                            </span>
                            </div>
                        </li>
                    ))}
                </li>
            </ul>
        </>
    );
}