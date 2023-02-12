import "./App.css";
import { Provider } from "react-redux";
import PhoneContainer from "./component/PhoneContainer/PhoneContainer";
import store from "./redux/store";
import HooksPhoneContainer from "./component/PhoneContainer/HooksPhoneContainer";
import HooksWatchContainer from "./component/watchContainer/watchContainer";
import PhoneWithPayloadContainer from "./component/PhoneContainer/PhoneWithPayloadContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PhoneContainer />
        <HooksPhoneContainer />
        <PhoneWithPayloadContainer />
        <HooksWatchContainer />
      </div>
    </Provider>
  );
}

export default App;
