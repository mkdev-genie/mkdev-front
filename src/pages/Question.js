import React, { useState } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import Result from './Result';
import Button from '../components/Button';
import tmp from '../imgs/tmp.png';

const Question = () => {
  const [num, setNum] = useState(1);
  const onIncrease = () => {
    setNum(num + 1);
  };
  if (num === 21) return <Result />;
  return (
    <Group>
      <ProgressBar>progress bar</ProgressBar>
      <QNum>
        {num}
        /20
      </QNum>
      <StyledQ>나는 css가 좋다</StyledQ>
      <Image>그림</Image>
      <Button onClick={onIncrease}>보기 1</Button>
      <Button onClick={onIncrease}>보기 2</Button>
      <Button onClick={onIncrease}>보기 3</Button>
      <Button onClick={onIncrease}>보기 4</Button>
    </Group>
  );
};

const Group = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
  justify-content: center;
  align-items: center;
`;

const ProgressBar = styled.div`
  color: white;
`;

const QNum = styled.div`
  color: white;
`;

const StyledQ = styled.div`
  color: white;
`;

const Image = styled.div`
  width: 335px;
  height: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-image: url(${tmp});
`;

export default Question;
