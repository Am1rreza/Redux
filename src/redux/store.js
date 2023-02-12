import { createStore } from "redux";
import phoneReducer from "./phone/phoneReducer";

const store = createStore(phoneReducer);

export default store;
