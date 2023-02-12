import { useDispatch, useSelector } from "react-redux";
import { buyPhone } from "../../redux/phone/phoneActions";

const HooksPhoneContainer = () => {
  const numOfPhones = useSelector((state) => state.phone.numOfPhones);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Phone with Hooks : {numOfPhones}</h2>
      <button onClick={() => dispatch(buyPhone())}>Buy a Phone</button>
    </div>
  );
};

export default HooksPhoneContainer;
