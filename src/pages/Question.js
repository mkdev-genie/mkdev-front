import React, { useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import Button from '../components/Button';
import tmp from '../imgs/tmp.png';

const Question = () => {
  const [num, setNum] = useState(1);
  const steps = Math.floor((num / 20) * 100);
  const onIncrease = () => {
    setNum(num + 1);
  };
  if (num === 21) return <Redirect to="/result" />;
  return (
    <Group>
      <ProgressBar>
        <Progress width={steps} />
      </ProgressBar>
      <TtlNum>
        <QNum>{num}</QNum>
        /20
      </TtlNum>
      <StyledQ>나는 css가 좋다</StyledQ>
      <Image>그림</Image>
      <Button onClick={onIncrease} type="light">
        보기 1
      </Button>
      <Button onClick={onIncrease} type="light">
        보기 2
      </Button>
      <Button onClick={onIncrease} type="light">
        보기 3
      </Button>
      <Button onClick={onIncrease} type="light">
        보기 4
      </Button>
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

const Progress = styled.div`
  width: ${(props) => props.width}%;
  height: 9px;
  background: #8be8a9;
  border-radius: 19px;
`;

const ProgressBar = styled.div`
  width: 348px;
  height: 13px;
  margin: 10px 10px;
  border: 2px solid #8be8a9;
  box-sizing: border-box;
  border-radius: 19px;
  color: #8be8a9;
`;

const QNum = styled.div`
  font-weight: bold;
  padding: 0 5px;
`;

const TtlNum = styled.div`
  display: flex;
  color: #8be8a9;
  font-family: Noto Sans HK;
  font-style: normal;
  font-size: 23px;
`;

const StyledQ = styled.div`
  margin: 0 5px;
  color: white;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
`;

const Image = styled.div`
  width: 335px;
  height: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-image: url(${tmp});
`;

export default Question;
