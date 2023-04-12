import { decrement, increment } from '../../redux/counterSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const ReduxPage = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
      <div>{count}</div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default ReduxPage;
