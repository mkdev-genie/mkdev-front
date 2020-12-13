import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import Button from '@/components/Button';
import tmp from '@/assets/images/tmp.png';

const Parsing = () => {
  const [info, setInfo] = useState();
  useEffect(() => {
    const apiCall = async () => {
      const { data } = await axios.get('http://localhost:3000/questions');
      const temp = data.resolved;
      // console.log(temp.map((n) => n.content));
      // console.log(data.resolved[0].choices[0].type2);
      setInfo(temp);
    };
    apiCall();
  }, []);
  if (!info) return null;
  return info;
};

const Question = () => {
  const [num, setNum] = useState(1);
  const steps = Math.floor((num / 20) * 100);
  const onIncrease = () => {
    setNum(num + 1);
  };
  if (num === 21) return <Redirect to="/result" />;
  const db = Parsing(num - 1);
  // console.log(db);
  return (
    <Group>
      <ProgressBar>
        <Progress width={steps} />
      </ProgressBar>
      <TtlNum>
        <QNum>{num}</QNum>
        /20
      </TtlNum>
      {db && <StyledQ>{db[0].content}</StyledQ>}
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
  background: ${({ theme }) => theme.color.tertiary};
  border-radius: 19px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 11px;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.tertiary};
  box-sizing: border-box;
  border-radius: 19px;
  color: ${({ theme }) => theme.color.tertiary};
`;

const QNum = styled.div`
  font-weight: 500;
  padding: 0 ${({ theme }) => theme.spacing[1]};
`;

const TtlNum = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing[1]};
  color: ${({ theme }) => theme.color.tertiary};
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSize.md};
`;

const StyledQ = styled.div`
  color: white;
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

const Image = styled.div`
  width: 100%;
  height: 200px;
  margin: ${({ theme }) => theme.spacing[5]} 0;
  background-image: url(${tmp});
`;

export default Question;
