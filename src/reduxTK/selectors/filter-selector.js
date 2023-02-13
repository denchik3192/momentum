import { createSelector } from "@reduxjs/toolkit";

export const selectAllTodos = (state) => state.todo;
export const selectActiveFilter = (state) => state.todo;

export const selectTodosByFilter = createSelector(
  [selectAllTodos, selectActiveFilter],
  (allTodos, activeFilter) => {
    if (activeFilter === "all") return allTodos;

    if (activeFilter === "complited") {
      return allTodos.filter((todo) => todo.checked);
    }
    return allTodos.filter((todo) => !todo.checked);
  }
);
