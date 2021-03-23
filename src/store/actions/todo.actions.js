import { ADD_TODO, REMOVE_TODO , EDIT_TODO } from "../types";

export const addTodo = function (payload) {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const removeTodo = function (payload) {
  return {
    type: REMOVE_TODO,
    payload,
  };
};
export const editTodo = function (payload) {
  return {
    type: EDIT_TODO,
    payload,
  };
};