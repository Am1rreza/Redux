import { BUY_PHONE } from "./phoneTypes";

const initialState = {
  numOfPhones: 50,
};

const phoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PHONE:
      return { ...state, numOfPhones: state.numOfPhones - 1 };

    default:
      return state;
  }
};

export default phoneReducer;
