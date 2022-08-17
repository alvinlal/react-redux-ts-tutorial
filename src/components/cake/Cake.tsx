import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ordered, restocked } from './cakeSlice';

const Cake = () => {
  const numOfCakes = useAppSelector(state => state.cake.numOfCakes);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <button onClick={() => dispatch(restocked(3))}>Restock cakes</button>
    </div>
  );
};

export default Cake;
