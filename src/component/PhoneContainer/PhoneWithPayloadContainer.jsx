import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyPhone } from "../../redux/phone/phoneActions";

const PhoneWithPayloadContainer = () => {
  const [number, setNumber] = useState(0);

  // get the global state
  const numOfPhones = useSelector((state) => state.phone.numOfPhones);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Phone with Payload : {numOfPhones}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyPhone(number))}>Buy {number} Phone</button>
    </div>
  );
};

export default PhoneWithPayloadContainer;
