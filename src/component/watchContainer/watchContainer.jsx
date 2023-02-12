import { useDispatch, useSelector } from "react-redux";
import { buyWatch } from "../../redux/watch/watchActions";

const HooksWatchContainer = () => {
  const numOfWatches = useSelector((state) => state.numOfWatches);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Watches : {numOfWatches}</h2>
      <button onClick={() => dispatch(buyWatch())}>Buy a Watch</button>
    </div>
  );
};

export default HooksWatchContainer;
