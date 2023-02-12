import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_FAILURE:
      return { loading: false, data: [], error: action.payload };
    case FETCH_USERS_SUCCESS:
      return { loading: false, data: action.payload, error: "" };

    default:
      return state;
  }
}

export default userReducer;
