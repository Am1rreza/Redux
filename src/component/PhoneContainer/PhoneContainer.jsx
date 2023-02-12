import { connect } from "react-redux";
import { buyPhone } from "../../redux/phone/phoneActions";

const PhoneContainer = ({ numOfPhones, buyPhone }) => {
  return (
    <div>
      <h2>Number of Phones : {numOfPhones}</h2>
      <button onClick={buyPhone}>Buy a Phone</button>
    </div>
  );
};

// Get the global state
const mapStateToProps = (state) => {
  return {
    numOfPhones: state.numOfPhones,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyPhone: () => dispatch(buyPhone()),
  };
};

// export
export default connect(mapStateToProps, mapDispatchToProps)(PhoneContainer);
