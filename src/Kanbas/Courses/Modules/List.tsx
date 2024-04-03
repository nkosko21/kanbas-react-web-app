import React, { useState } from "react";
import "./index.tsx";
import { modules } from "../../../kanbas-node-server-app/Kanbas/Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";
import './index.css';
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();

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
            onClick={() => dispatch(deleteModule(module.name))}
          >
            Delete
          </button>
          <button 
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          >
            Add
          </button>
          <button onClick={() => dispatch(updateModule(module))}>
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