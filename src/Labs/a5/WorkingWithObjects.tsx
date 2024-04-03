import React, { useEffect, useState } from "react";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`;
    const fetchAssignment = async () => {
      const response = await axios.get(`${ASSIGNMENT_URL}`);
      setAssignment(response.data);
    };
    const updateTitle = async () => {
      const response = await axios
        .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
      setAssignment(response.data);
    };
    useEffect(() => {
      fetchAssignment();
    }, []);
  

    return (
        <div>
            <h2>Working With Objects</h2>
            <h3>Modifying Properties</h3>
            <input onChange={(e) => setAssignment({
                    ...assignment, title: e.target.value })}
                value={assignment.title} type="text" />
            <button onClick={updateTitle} >
                Update Title to: {assignment.title}
            </button>
            <button onClick={fetchAssignment} >
                Fetch Assignment
            </button>
            <a href={`${API_BASE}a5/assignment/title`}>
                Get Title
            </a>


            <h4>Retrieving Objects</h4>
            <a href={`${API_BASE}a5/assignment`}>
                Get Assignment
            </a>

            <br />

            <h4>Retrieving Properties</h4>

            <br />

            <h4>Modifying Properties</h4>
            <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input type="text" 
                onChange={(e) => setAssignment({ ...assignment,
                    title: e.target.value })}
                value={assignment.title}/>
        </div>
    );
}
export default WorkingWithObjects;