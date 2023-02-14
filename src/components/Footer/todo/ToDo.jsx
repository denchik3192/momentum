import React from "react";
import s from "./todo.module.scss";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import ToDoItem from "./ToDoItem/ToDoItem";
import { useState } from "react";
import { addToDo, sortByName } from "../../../reduxTK/todoSlice";
import { MoreHoriz } from "@material-ui/icons";
// import Select from "react-select";
import { selectTodosByFilter } from "../../../reduxTK/selectors/filter-selector";
import { changeFilter } from "../../../reduxTK/filterSlice";
import SelectComponent from "./SelectComponent";

const ToDo = ({ active }) => {
  const [newToDo, setNewToDo] = useState("");
  const [sortName, setSortName] = useState("Date");
  const [maximizedToDo, setMaximizedToDo] = useState(false);
  const [moreActive, setMoreActive] = useState(false);
  const todos = useSelector(selectTodosByFilter);
  const dispatch = useDispatch();

  const todosElements = todos.map((todo) => (
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
          <SelectComponent onSelectHandle={onSelectHandle} />
          <button onClick={() => dispatch(changeFilter("all"))}>All</button>
          <button onClick={() => dispatch(changeFilter("active"))}>
            Active
          </button>
          <button onClick={() => dispatch(changeFilter("complited"))}>
            Complited
          </button>
        </div>
      ) : (
        <div></div>
      )}
      {todosElements}

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
