import "./App.css";
import { Provider } from "react-redux";
import PhoneContainer from "./component/PhoneContainer/PhoneContainer";
import store from "./redux/store";
import HooksPhoneContainer from "./component/PhoneContainer/HooksPhoneContainer";
import HooksWatchContainer from "./component/watchContainer/watchContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PhoneContainer />
        <HooksPhoneContainer />
        <HooksWatchContainer />
      </div>
    </Provider>
  );
}

export default App;
