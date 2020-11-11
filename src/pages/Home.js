import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import MainTitle from '../components/MainTitle';
import SubTitle from '../components/SubTitle';
import RoundedText from '../components/RoundedText';
import ShareButton from '../components/ShareButton';
import tmp from '../imgs/tmp.png';
import IconFacebook from '../imgs/icon-facebook.svg';
import IconKakao from '../imgs/icon-kakaotalk.svg';
import IconLink from '../imgs/icon-link.svg';

const Home = () => (
  <Group>
    <RoundedText>project. mkdev</RoundedText>
    <MainTitle>개발 포지션 테스트</MainTitle>
    <Intro>개발에도 MBTI가 있다!</Intro>
    <Intro>나에게 가장 어울리는 개발 포지션은?</Intro>
    <Image>그림</Image>
    <Link to="/question">
      <Button>개발 성향 알아보기</Button>
    </Link>
    <SubTitle>공유하기</SubTitle>
    <Share>
      <ShareButton className="icon-kakao">
        <img src={IconKakao} alt="kakaotalk" />
      </ShareButton>
      <ShareButton className="icon-facebook">
        <img src={IconFacebook} alt="facebook" />
      </ShareButton>
      <ShareButton className="icon-link">
        <img src={IconLink} alt="link" />
      </ShareButton>
    </Share>
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

const Share = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled.div`
  width: 335px;
  height: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-image: url(${tmp});
`;

export default Home;
