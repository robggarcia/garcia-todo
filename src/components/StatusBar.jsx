import "./StatusBar.css";

function StatusBar(props) {
  const numTodos = props.todoList.reduce((acc, todo) => {
    if (!todo.complete) {
      return (acc += 1);
    } else {
      return acc;
    }
  }, 0);

  function handleShowStatus(e) {
    props.setShowStatus(e.target.id);
    return;
  }

  function clearCompleted() {
    let newList = props.todoList.filter((todo) => !todo.complete);
    props.setTodoList(newList);
  }

  return (
    <>
      <li id="summary" key="summary">
        <div id="items-left">{numTodos} items left</div>
        <div className="show">
          <button
            id="all"
            className={props.showStatus === "all" ? "highlight" : ""}
            onClick={handleShowStatus}
          >
            All
          </button>
          <button
            id="active"
            className={props.showStatus === "active" ? "highlight" : ""}
            onClick={handleShowStatus}
          >
            Active
          </button>
          <button
            id="completed"
            className={props.showStatus === "completed" ? "highlight" : ""}
            onClick={handleShowStatus}
          >
            Completed
          </button>
        </div>
        <button id="clear" onClick={clearCompleted}>
          Clear Completed
        </button>
      </li>
    </>
  );
}

export default StatusBar;
