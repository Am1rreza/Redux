import {
  FETCH_POST_FAILURE,
  FETCH_POST_SUCCESS,
  FETCH_POST_REQUEST,
} from "./postTypes";

// Action creators
function fetchPostRequest(id) {
  return {
    type: FETCH_POST_REQUEST,
    payload: id,
  };
}

function fetchPostFailure(error) {
  return {
    type: FETCH_POST_FAILURE,
    payload: error,
  };
}

function fetchPostSuccess(post) {
  return {
    type: FETCH_POST_SUCCESS,
    payload: post,
  };
}

// Async action creator
// const fetchUsers = () => {
//     return function (dispatch) {
//       dispatch(fetchUserRequest());
//       axios
//         .get("https://jsonplaceholder.typicode.com/users")
//         .then((res) => {
//           const users = res.data;
//           dispatch(fetchUserSuccess(users));
//         })
//         .catch((error) => dispatch(fetchUserFailure(error.message)));
//     };
//   };

//   export default fetchUsers;
