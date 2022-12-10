import { GET_ALL_TODOS, TOGGLE_TABS } from "../actions/constraints";

const tabReducer = (state = GET_ALL_TODOS, action) => {
  switch (action.type) {
    case TOGGLE_TABS:
      return action.selected;
    default:
      return state;
  }
};

export default tabReducer;
