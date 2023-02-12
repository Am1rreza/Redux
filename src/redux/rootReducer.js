import { combineReducers } from "redux";
import phoneReducer from "./phone/phoneReducer";
import watchReducer from "./watch/watchReducer";
import userReduser from "./user/userReducer";

const rootReducer = combineReducers({
  phone: phoneReducer,
  watch: watchReducer,
  users: userReduser,
});

export default rootReducer;
