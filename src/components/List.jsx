import { useState } from "react";

import StatusBar from "./StatusBar";

import "./List.css";

function List(props) {
  const [showStatus, setShowStatus] = useState("all");

  function handleCheck(e) {
    let updateList = props.todoList.map((todo) => {
      if (e.target.id == todo.id) {
        todo.complete = !todo.complete;
        return todo;
      }
      return todo;
    });
    props.setTodoList(updateList);
  }

  const numTodos = props.todoList.reduce((acc, todo) => {
    if (!todo.complete) {
      return (acc += 1);
    } else {
      return acc;
    }
  }, 0);

  return (
    <>
      {props.todoList.map((todo) => {
        let classes =
          (todo.complete ? "strike" : undefined) +
          " " +
          ((showStatus === "active" && todo.complete) ||
          (showStatus === "completed" && !todo.complete)
            ? "hide"
            : "");
        return (
          <li className={classes} id={todo.id} key={todo.id}>
            <input
              type="checkbox"
              id={todo.id}
              checked={todo.complete}
              onChange={handleCheck}
            />
            {todo.task}
          </li>
        );
      })}
      <StatusBar
        todoList={props.todoList}
        setTodoList={props.setTodoList}
        showStatus={showStatus}
        setShowStatus={setShowStatus}
      />
    </>
  );
}

export default List;
