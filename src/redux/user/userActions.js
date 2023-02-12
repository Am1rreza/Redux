import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

// Action creators
function fetchUserRequest() {
  return {
    type: FETCH_USERS_REQUEST,
  };
}

function fetchUserFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
}

function fetchUserSuccess(data) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: data,
  };
}

// Async action creator
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => dispatch(fetchUserFailure(error.message)));
  };
};

export default fetchUsers;
