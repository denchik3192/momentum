import React from "react";
import s from "./todo.module.scss";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import ToDoItem from "./ToDoItem/ToDoItem";
import { useState } from "react";
import { addToDo, changeFilter, sortByName } from "../../../reduxTK/todoSlice";
import { More, MoreHoriz } from "@material-ui/icons";
import Select from "react-select";
import { selectTodosByFilter } from "../../../reduxTK/selectors/filter-selector";

const ToDo = ({ active }) => {
  const [newToDo, setNewToDo] = useState("");
  const [sortName, setSortName] = useState("Date");
  const [maximizedToDo, setMaximizedToDo] = useState(false);
  const [moreActive, setMoreActive] = useState(false);
  // const [editToDo, setEditToDo] = useState(false);
  const todos = useSelector( selectTodosByFilter );
  // const todos = useSelector((state) => state.todo);
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

  const options = [
    { value: "date", label: "Date", color: "#fff" },
    { value: "name", label: "Name", color: "#fff" },
  ];

  const colorStyles = {
    
    control: (styles, state) => ({
      ...styles,
      backgroundColor: "grey",
      color: "ffffff",
    }),
    // option: (styles, { data, isSelected, isFocused, isDisabled }) => {
    //   return { ...styles, color: data.color, backgroundColor: "grey" };
    // },
    option: (styles, state) => {
      return { ...styles, color: state.data.color, backgroundColor: "grey" };
    },
  };

  // const doneTodosElements = todos.doneTodos.map((todo) => (
  //   <ToDoItem content={todo.content} key={todo.id} />
  // ));

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
      //ask
      dispatch(addToDo(newToDo));
      setNewToDo("");
    }
  };

  const onSelectHandle = (e) => {
    console.log(e);
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
          <Select
          
          theme={(theme) => ({
            ...theme,
            // borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: 'transparent',
              primary: 'grey',
              neutral0: 'white'
            },
          })}
            options={options}
            onChange={onSelectHandle}
            styles={colorStyles}
          />
          {/* <select name="sorting" id="sorting" onChange={onSelectHandle} value=
          {sortName}>
            <option value="Date">Date</option>
            <option value="Name">Name</option>
          </select> */}
          <button onClick={()=>dispatch(changeFilter('all'))}>All</button> <button onClick={()=>dispatch(changeFilter('active'))}>Active</button> <button onClick={()=>dispatch(changeFilter('complited'))}>Complited</button>
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
