import React from 'react';
import logo from './logo.svg';
import './App.css';
import Labs from "./Labs"
import HelloWorld from './Labs/a3/HelloWorld';
import Kanbas from './Kanbas';
import { HashRouter } from 'react-router-dom';
import {Routes, Route, Navigate} from "react-router";
import Dashboard from './Kanbas/Dashboard';
import { courses } from "./Kanbas/Database";
import { useState } from "react";

function App() {
  const [coursesVar, setCourses] = useState<any[]>(courses);
  const [course, setCourse] = useState({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([...coursesVar, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(coursesVar.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      coursesVar.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/"       element={<Navigate to="/Labs"/>} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/Hello"  element={<HelloWorld />} />
          <Route path="/Kanbas/Dashboard" 
            element={
              <Dashboard 
                courses={coursesVar}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />
            } 
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
