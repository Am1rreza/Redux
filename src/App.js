import "./App.css";
import { Provider } from "react-redux";
import PhoneContainer from "./component/PhoneContainer/PhoneContainer";
import store from "./redux/store";
import HooksPhoneContainer from "./component/PhoneContainer/HooksPhoneContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PhoneContainer />
        <HooksPhoneContainer />
      </div>
    </Provider>
  );
}

export default App;
