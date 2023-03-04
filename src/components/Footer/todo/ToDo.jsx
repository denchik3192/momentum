import React from "react";
import s from "./todo.module.scss";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import ToDoItem from "./ToDoItem/ToDoItem";
import { useState } from "react";
import { addToDo, sortByName } from "../../../reduxTK/todoSlice";
import { selectTodosByFilter } from "../../../reduxTK/selectors/filter-selector";
import { changeFilter } from "../../../reduxTK/filterSlice";
import SelectComponent from "./SelectComponent";
import { MoreHoriz } from "@mui/icons-material";

const ToDo = ({ active }) => {
  const [newToDo, setNewToDo] = useState("");
  const [, setSortName] = useState("Date");
  const [maximizedToDo, setMaximizedToDo] = useState(false);
  const [moreActive, setMoreActive] = useState(false);
  const [selectedTodosStatus, setSelectedTodosStatus] = useState("all");

  const todos = useSelector(selectTodosByFilter);
  const dispatch = useDispatch();

  const todosList = todos.map((todo) => (
    <ToDoItem
      maximizedToDo={maximizedToDo}
      content={todo.content}
      key={todo.id}
      id={todo.id}
      checked={todo.checked}
    />
  ));

  const onToDoChange = (e) => {
    setNewToDo(e.currentTarget.value);
  };

  const toggleMoreButton = () => {
    setMoreActive(!moreActive);
  };

  const toggleMaximizedToDo = () => {
    setMaximizedToDo(!maximizedToDo);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && newToDo) {
      //remove deprecated
      dispatch(addToDo(newToDo));
      setNewToDo("");
    }
  };

  const onSelectHandle = (e) => {
    dispatch(sortByName(e.label));
    setSortName(e.label);
  };

  const selectTodosStatus = (e) => {
    dispatch(changeFilter(e));
    setSelectedTodosStatus(e);
  };

  return (
    <div
      className={
        cn(s.todo, active ? s.active : "", maximizedToDo ? s.maximized : "")
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
          <SelectComponent onSelectHandle={onSelectHandle} />
          {/* fix */}
          <button
            className={cn(selectedTodosStatus === "all" ? s.active : "")}
            onClick={() => selectTodosStatus("all")}
          >
            All
          </button>
          <button
            className={cn(selectedTodosStatus === "active" ? s.active : "")}
            onClick={() => selectTodosStatus("active")}
          >
            Active
          </button>
          <button
            className={cn(selectedTodosStatus === "complited" ? s.active : "")}
            onClick={() => selectTodosStatus("complited")}
          >
            Complited
          </button>
        </div>
      ) : (
        <div></div>
      )}
      <div className={s.todosListWrapper}>{todosList}</div>
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
