import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => (
  <Group>
    <h2>mkdev 심리테스트</h2>
    <img src="../imgs/tmp.png" alt="not found" />
    <b>
      이것은 설명..이것은 설명...
      <br />
      이것은 설명..이것은 설명...
      <br />
      이것은 설명..이것은 설명...
    </b>
    <Link to="/question">
      <Button>시작하기</Button>
    </Link>
    <b>
      참여자수
      {' '}
      <br />
      {' '}
      1900명
    </b>
  </Group>
);

const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Home;
