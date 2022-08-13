import { useState } from "react";
import List from "./List";

import "./Input.css";

function Input() {
  let testData = [
    {
      id: 0,
      task: "make app",
      complete: true,
    },
    {
      id: 1,
      task: "eat skillet cookie",
      complete: true,
    },
    {
      id: 2,
      task: "get paid",
      complete: false,
    },
  ];

  const [todoList, setTodoList] = useState([]);

  function handleInput(e) {
    e.preventDefault();
    const input = document.querySelector("#input");
    if (input.value) {
      if (todoList.length === 0) {
        let newTask = input.value;
        input.value = "";
        setTodoList([
          {
            id: 0,
            task: newTask,
            complete: false,
          },
        ]);
      } else {
        let updatedList = [...todoList];
        updatedList.push({
          id: todoList[todoList.length - 1].id + 1,
          task: input.value,
          complete: false,
        });
        setTodoList(updatedList);
      }

      input.value = "";
    }
  }

  return (
    <div>
      <form>
        <button type="submit" onClick={handleInput}>
          +
        </button>
        <input
          type="text"
          id="input"
          placeholder="What do you need to do?"
        ></input>
      </form>
      <List todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default Input;
