import { combineReducers } from "redux";
import phoneReducer from "./phone/phoneReducer";
import watchReducer from "./watch/watchReducer";
import userReduser from "./user/userReducer";
import postReducer from "./posts/postReducer";

const rootReducer = combineReducers({
  phone: phoneReducer,
  watch: watchReducer,
  users: userReduser,
  post: postReducer,
});

export default rootReducer;
