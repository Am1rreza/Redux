import "./App.css";
import { Provider } from "react-redux";
import PhoneContainer from "./component/PhoneContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PhoneContainer />
      </div>
    </Provider>
  );
}

export default App;
