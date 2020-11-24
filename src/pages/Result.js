import React from 'react';
import styled from 'styled-components';
import SubTitle from '../components/SubTitle';
import RoundedText from '../components/RoundedText';
import ShareButton from '../components/ShareButton';
import tmp from '../imgs/tmp.png';
import IconFacebook from '../imgs/icon-facebook.svg';
import IconKakao from '../imgs/icon-kakaotalk.svg';
import IconLink from '../imgs/icon-link.svg';

const Result = () => (
  <Group>
    <RoundedText>당신에게 어울리는 개발 포지션은</RoundedText>
    <div>눈에 1px이 거슬립니다</div>
    <div>프론트엔드 개발자</div>
    <Image />
    <div>어쩌구 저쩌구 설명</div>
    <SubTitle>나의 개발 다이어그램</SubTitle>
    <div>그래프</div>
    <SubTitle>이런 직업 어때요?</SubTitle>
    <RoundedText>프론트엔드 개발자</RoundedText>
    <RoundedText>웹 개발자</RoundedText>
    <RoundedText>웹 퍼블리셔</RoundedText>
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

const Image = styled.div`
  width: 335px;
  height: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-image: url(${tmp});
`;

const Share = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Result;
