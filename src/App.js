import "./App.css";
import { Provider } from "react-redux";
import PhoneContainer from "./component/PhoneContainer";
import store from "./redux/store";
import HooksPhoneContainer from "./component/HooksPhoneContainer";

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
