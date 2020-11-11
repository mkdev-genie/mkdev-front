import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import MainTitle from '../components/MainTitle';
import SubTitle from '../components/SubTitle';
import RoundedText from '../components/RoundedText';

const Home = () => (
  <Group>
    <RoundedText>project.mkdev</RoundedText>
    <MainTitle>개발 포지션 테스트</MainTitle>
    <Intro>개발에도 MBTI가 있다!</Intro>
    <Intro>나에게 가장 어울리는 개발 포지션은?</Intro>
    <img src="../imgs/tmp.jpeg" alt=" " />
    <Link to="/question">
      <Button>개발 성향 알아보기</Button>
    </Link>
    <SubTitle>공유하기</SubTitle>
  </Group>
);

const Group = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
  justify-content: center;
  align-items: center;
`;

const Intro = styled.div`
  display: flex;
  color: white;
`;

export default Home;
