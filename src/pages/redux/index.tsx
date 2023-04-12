import { useState } from 'react';

import {
  decrement,
  increment,
  incrementByAmount,
} from '../../redux/counterSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const ReduxPage = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <div>{count}</div>
      <div>
        <button
          onClick={() => dispatch(increment())}
          style={{ padding: '1rem' }}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          style={{ padding: '1rem' }}
        >
          Decrement
        </button>
      </div>
      <div>
        <input
          type="number"
          value={value}
          onChange={handleChange}
          style={{ padding: '1rem' }}
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(value)))}
          style={{ padding: '1rem' }}
        >
          increment By Amount
        </button>
      </div>
    </div>
  );
};

export default ReduxPage;
