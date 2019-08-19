import { CHANGE_SEARCH_VALUE } from "../types";

export const INITIAL_STATE = {
  searchValue: "Valor"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.value
      };
    default:
      return state;
  }
};
