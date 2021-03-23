import { ADD_TODO, REMOVE_TODO, EDIT_TODO, IN_PROGRESS, DONE } from "../types";

const initialState = [
  {
    _id: 21,
    todo: "feed the dog",
    status: IN_PROGRESS,
  },
  {
    _id: 20,
    todo: "feed the dog",
    status: IN_PROGRESS,
  },
];

export default function todo(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TODO:
      return [...state, { ...payload, status: IN_PROGRESS }];
    case REMOVE_TODO:
      return [...state.filter((item) => item._id !== payload._id)];
    case EDIT_TODO:
      return [
        ...state.map((item) => {
          if (item.id === payload.id) {
            item.status = DONE;
          }
          return item;
        }),
      ];
    default:
      return state;
  }
}
