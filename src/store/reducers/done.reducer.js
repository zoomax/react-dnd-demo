import { ADD_DONE, REMOVE_DONE, EDIT_DONE, IN_PROGRESS, DONE } from "../types";

const initialState = [
  {
    _id: 250,
    todo: "wash the dished",
    status: DONE,
  },
  {
    _id: 210,
    todo: "tide your room",
    status: DONE,
  },
];

export default function done(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_DONE:
      return [...state, { ...payload, status: DONE }];
    case REMOVE_DONE:
      return [...state.filter((item) => item._id !== payload._id)];
    case EDIT_DONE:
      return [
        ...state.map((item) => {
          if (item._id === payload._id) {
            item.status = IN_PROGRESS;
          }
          return item;
        }),
      ];
    default:
      return state;
  }
}
