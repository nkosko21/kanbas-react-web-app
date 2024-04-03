import React, { useEffect, useState } from "react";
import "./index.tsx";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";
import './index.css';
import * as client from "./client";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./reducer";
import { KanbasState } from "../../store";
import { findModulesForCourse, createModule } from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status: any) => {
      dispatch(deleteModule(moduleId));
    });
  }
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };


  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);


  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <>
      <button className="module-button-reg">Collapse All</button>
      <button className="module-button-reg">View Progress</button>
      <button className="module-button-reg"><FaCheckCircle className="text-success" />Publish All</button>
      <button className="module-button-module"><FaPlus />Module</button>
      <button className="module-button-reg"><FaEllipsisV /></button>
      <br />
      <br />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <button
            onClick={(event) => { setModule(module); }}>
            Edit
          </button>
          <button
            onClick={() => handleDeleteModule(module._id)}
          >
            Delete
          </button>
          <button 
            onClick={handleAddModule}
          >
            Add
          </button>
          <button onClick={handleUpdateModule}>
            Update
          </button>

          <input value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
          />
          <textarea value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
          />
        </li>
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <button
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
              <h3>{module.name}</h3>
              <p>{module.description}</p>
            </li>
          ))}
      </ul>
    </>
  );
}

export default ModuleList;