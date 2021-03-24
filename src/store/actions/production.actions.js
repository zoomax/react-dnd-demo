import { EDIT_PRODUCTION } from "../types";

export const editProduction = (payload) => {
  return {
    type: EDIT_PRODUCTION,
    payload,
  };
};
