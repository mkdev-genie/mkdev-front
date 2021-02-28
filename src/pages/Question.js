import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import Button from '@/components/Button';
import Loading from '@/components/Loading';

const Parsing = () => {
  const [info, setInfo] = useState();
  useEffect(() => {
    const apiCall = async () => {
      const { data } = await axios.get('https://mkdev.o-r.kr/questions');
      const temp = data.resolved;
      setInfo(temp);
    };
    apiCall();
  }, []);

  if (!info) return null;

  return info;
};

const Question = () => {
  const db = Parsing();
  const [num, setNum] = useState(1);
  const [type, setType] = useState(new Array(12).fill(0));
  const steps = Math.floor((num / 14) * 100);

  const onIncrease = (e) => {
    setNum(num + 1);
    setType(
      type.map((v, i) => v + db[num - 1].choices[e.target.id][`type${i + 1}`]),
    );
  };

  const resultNum = type.indexOf(Math.max.apply(null, type)) + 1;
  if (num === 15)
    return (
      <Redirect
        to={{ pathname: `/result/${resultNum}`, state: { isUser: true } }}
      />
    );

  if (!db) return <Loading />;

  return (
    <Group>
      <ProgressWrapper>
        <ProgressBar>
          <Progress width={steps} />
        </ProgressBar>
        <TtlNum>
          <QNum>{num}</QNum>
          /&nbsp;14
        </TtlNum>
      </ProgressWrapper>
      <StyledQ>{db[num - 1].content}</StyledQ>
      <ButtonWrapper>
        {db[num - 1].choices.map((choice, i) => {
          return (
            <Button onClick={onIncrease} type="light" id={i}>
              {choice.content}
            </Button>
          );
        })}
      </ButtonWrapper>
    </Group>
  );
};

const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: calc(100vh - ${({ theme }) => theme.spacing(10)});
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
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  border: 1px solid ${({ theme }) => theme.color.tertiary};
  box-sizing: border-box;
  border-radius: 19px;
  color: ${({ theme }) => theme.color.tertiary};
`;

const QNum = styled.div`
  font-weight: 500;
  padding: 0 ${({ theme }) => theme.spacing(1)};
`;

const TtlNum = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.color.tertiary};
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSize.md};
`;

const StyledQ = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  color: white;
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.lg};
  text-align: center;
  line-height: ${({ theme }) => theme.spacing(3.5)};
`;

const ButtonWrapper = styled.div`
  width: 100%;
`;
const ProgressWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export default Question;
