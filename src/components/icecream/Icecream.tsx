import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ordered, restocked } from './icecreamSlice';

const IceCream = () => {
  const noOfIcecreams = useAppSelector(state => state.icecream.numOfIcecreams);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of icecreams - {noOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order icecream</button>
      <button onClick={() => dispatch(restocked(3))}>Restock icecream</button>
    </div>
  );
};

export default IceCream;
