import { BUY_WATCH } from "./watchTypes";

const initialState = {
  numOfWatches: 20,
};

const watchReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_WATCH:
      return { numOfWatches: state.numOfWatches - 1 };

    default:
      return state;
  }
};

export default watchReducer;