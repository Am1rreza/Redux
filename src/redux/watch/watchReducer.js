import { BUY_WATCH } from "./watchTypes";

const initialState = {
  numOfWatch: 20,
};

const watchReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_WATCH:
      return { numOfWatch: state.numOfWatch - 1 };

    default:
      return state;
  }
};

export default watchReducer;