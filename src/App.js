import "./App.css";
import { Provider } from "react-redux";
import PhoneContainer from "./component/PhoneContainer/PhoneContainer";
import store from "./redux/store";
import HooksPhoneContainer from "./component/PhoneContainer/HooksPhoneContainer";
import HooksWatchContainer from "./component/watchContainer/watchContainer";
import PhoneWithPayloadContainer from "./component/PhoneContainer/PhoneWithPayloadContainer";
import UserContainer from "./component/UserContainer/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PhoneContainer />
        <HooksPhoneContainer />
        <PhoneWithPayloadContainer />
        <HooksWatchContainer />
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
