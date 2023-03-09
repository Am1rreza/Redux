import {
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "./postTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return { ...state, loading: true };
    case FETCH_POST_FAILURE:
      return { loading: false, data: [], error: action.payload };
    case FETCH_POST_SUCCESS:
      return { loading: false, data: action.payload, error: "" };

    default:
      return state;
  }
}

export default postReducer;
