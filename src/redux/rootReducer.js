import { combineReducers } from "redux";
import phoneReducer from "./phone/phoneReducer";
import watchReducer from "./watch/watchReducer";

const rootReducer = combineReducers({
  phone: phoneReducer,
  watch: watchReducer,
});

export default rootReducer;
