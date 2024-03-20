import React from "react";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import { useSelector } from "react-redux";
import { LabState } from "../store";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
      }
    const { todos } = useSelector((state: LabState) => state.todosReducer);
    
  return(
    <>
      <h1>Assignment 4</h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <Counter />   
      <ReduxExamples/>
    </>
  );
};
export default Assignment4;