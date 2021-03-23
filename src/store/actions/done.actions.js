import { ADD_DONE, REMOVE_DONE , EDIT_DONE } from "../types";

export const addDone = function (payload) {
  return {
    type: ADD_DONE,
    payload,
  };
};
export const removeDone = function (payload) {
  return {
    type: REMOVE_DONE,
    payload,
  };
};

export const editDone = function (payload) {
    return {
      type: EDIT_DONE,
      payload,
    };
  };
