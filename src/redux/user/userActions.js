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
      .get("https://jsonplacefholder.typicode.com/users")
      .then((res) => {
        const usersId = res.data.map((user) => user.id);
        dispatch(fetchUserSuccess(usersId));
      })
      .catch((error) => dispatch(fetchUserFailure(error.message)));
  };
};

export default fetchUsers;
