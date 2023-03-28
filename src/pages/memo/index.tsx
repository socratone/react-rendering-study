import styled from '@emotion/styled';
import { memo, useCallback, useState } from 'react';

type MemoValueChildProps = {
  value: number;
};

type MemoFunctionChildProps = {
  onClick: () => void;
};

const StyledBox = styled.div`
  border: 1px solid gainsboro;
  padding: 1rem;
`;

const Child = () => {
  return <StyledBox>Child</StyledBox>;
};

const MemoChild = memo(() => {
  return <StyledBox>MemoChild</StyledBox>;
});

const MemoValueChild: React.FC<MemoValueChildProps> = memo(({ value }) => {
  return <StyledBox>MemoValueChild {value}</StyledBox>;
});

const MemoFunctionChild: React.FC<MemoFunctionChildProps> = memo(
  ({ onClick }) => {
    return <StyledBox onClick={onClick}>MemoFunctionChild</StyledBox>;
  }
);

const Memo = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    //
  };

  const handleMemoClick = useCallback(() => {
    //
  }, []);

  return (
    <StyledBox
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <div>{count}</div>
      <button
        onClick={() => setCount((count) => count + 1)}
        style={{ padding: '1rem' }}
      >
        Increase
      </button>
      <Child />
      <MemoChild />
      <MemoValueChild value={Math.floor(count / 5)} />
      <MemoFunctionChild onClick={handleClick} />
      <MemoFunctionChild onClick={handleMemoClick} />
    </StyledBox>
  );
};

export default Memo;
