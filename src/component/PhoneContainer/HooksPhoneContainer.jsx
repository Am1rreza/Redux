import { useDispatch, useSelector } from "react-redux";
import { buyPhone } from "../../redux/phone/phoneActions";

const HooksPhoneContainer = () => {
  const numOfPhones = useSelector((state) => state.numOfPhones);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Phones : {numOfPhones}</h2>
      <button onClick={() => dispatch(buyPhone())}>Buy a Phone</button>
    </div>
  );
};

export default HooksPhoneContainer;
