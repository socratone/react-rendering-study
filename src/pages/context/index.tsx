import styled from '@emotion/styled';
import { memo, useContext, useState } from 'react';
import { createContext } from 'react';

type CountContextValue = {
  count?: number;
  increaseCount?: () => void;
};

const StyledBox = styled.div`
  border: 1px solid gainsboro;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CountContext = createContext<CountContextValue>({});

const ProviderGrandChild = () => {
  return (
    <StyledBox>
      <div>ProviderGrandChild</div>
      <Counter />
    </StyledBox>
  );
};

const ProviderChild = () => {
  console.log('render ProviderChild!');
  return (
    <StyledBox>
      <div>ProviderChild</div>
      <ProviderGrandChild />
    </StyledBox>
  );
};

const MemoProviderGrandChild = () => {
  return (
    <StyledBox>
      <div>MemoProviderGrandChild</div>
      <Counter />
    </StyledBox>
  );
};

const MemoProviderChild = memo(() => {
  console.log('render MemoProviderChild!');
  return (
    <StyledBox>
      <div>MemoProviderChild</div>
      <MemoProviderGrandChild />
    </StyledBox>
  );
});

const Counter = () => {
  const { count, increaseCount } = useContext(CountContext);

  return (
    <StyledBox>
      <div>{count}</div>
      <button onClick={increaseCount} style={{ padding: '1rem' }}>
        Increase
      </button>
    </StyledBox>
  );
};

const Context = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <StyledBox>
      <div>ProviderParent</div>
      <CountContext.Provider
        value={{
          count,
          increaseCount,
        }}
      >
        <MemoProviderChild />
        <ProviderChild />
      </CountContext.Provider>
    </StyledBox>
  );
};

export default Context;
