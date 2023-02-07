import React from "react";
import s from "./todo.module.scss";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import ToDoItem from "./ToDoItem/ToDoItem";
import { useState } from "react";
import { addToDo, deleteToDo, sortByName } from "../../../reduxTK/todoSlice";
import { More, MoreHoriz } from "@material-ui/icons";

const ToDo = ({ active }) => {
  const [newToDo, setNewToDo] = useState("");
  const [sortName, setSortName] = useState("Date");
  const [maximizedToDo, setMaximizedToDo] = useState(false);
  const [moreActive, setMoreActive] = useState(false);
  const [editToDo, setEditToDo] = useState(false);
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const todosElements = todos.todos.map((todo) => (
    <ToDoItem
      maximizedToDo={maximizedToDo}
      content={todo.content}
      key={todo.id}
      id={todo.id}
      checked={todo.checked}
    />
  ));

  // const doneTodosElements = todos.doneTodos.map((todo) => (
  //   <ToDoItem content={todo.content} key={todo.id} />
  // ));

  const onToDoChange = (e) => {
    setNewToDo(e.currentTarget.value);
  };

  const toggleMoreButton = (e) => {
    setMoreActive(!moreActive);
  };

  const toggleMaximizedToDo = () => {
    setMaximizedToDo(!maximizedToDo);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && newToDo) {
      //ask
      dispatch(addToDo(newToDo));
      setNewToDo("");
    }
  };

  const onSelectHandle = (e) => {
    dispatch(sortByName(e.currentTarget.value))
    setSortName(e.currentTarget.value)
  }

  return (
    <div
      className={
        active ? cn(s.todo, s.active, maximizedToDo ? s.maximized : "") : s.todo //fix long classnames
      }
    >
      <div className={s.todoHedaer}>
        ToDo <MoreHoriz onClick={toggleMoreButton} />
        <div
          className={cn(s.moreModal, moreActive ? "" : s.active)}
          onClick={toggleMaximizedToDo}
        >
          {maximizedToDo ? "Minimize" : "Maximize"}
        </div>
      </div>

      {maximizedToDo ? (
        <div className={s.status}>
          <select name="sorting" id="sorting" onChange={onSelectHandle} value=
          {sortName}>
            <option value="Date">Date</option>
            <option value="Name">Name</option>
          </select>
          <button>All</button> <button>Active</button> <button onClick={dispatch(showDone())}>Done</button>
        </div>
      ) : (
        <div></div>
      )}
      {todosElements}
      {/* <div className={s.doneTodos}>{doneTodosElements}</div> */}

      <div className={s.todoFooter}>
        <input
          type="text"
          name="newToDo"
          value={newToDo}
          id={s.toDoInput}
          placeholder="New"
          onChange={onToDoChange} //check!
          onKeyPress={(e) => handleKeyPress(e)}
        />
      </div>
    </div>
  );
};

export default React.memo(ToDo);
