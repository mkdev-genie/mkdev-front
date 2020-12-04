import React from 'react';
import styled from 'styled-components';
import MainTitle from '@/components/MainTitle';
import SubTitle from '@/components/SubTitle';
import BodyText from '@/components/BodyText';
import RoundedText from '@/components/RoundedText';
import ShareButton from '@/components/ShareButton';
import tmp from '@/assets/images/tmp.png';
import IconFacebook from '@/assets/images/icon-facebook.svg';
import IconKakao from '@/assets/images/icon-kakaotalk.svg';
import IconLink from '@/assets/images/icon-link.svg';

const Result = () => (
  <Group>
    <RoundedText>당신에게 어울리는 개발 포지션은</RoundedText>
    <BodyText>눈에 1px이 거슬립니다</BodyText>
    <MainTitle>프론트엔드 개발자</MainTitle>
    <Image />
    <BodyText>어쩌구 저쩌구 설명</BodyText>
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
  width: 100%;
  height: 200px;
  margin: ${({ theme }) => theme.spacing[5]} 0;
  background-image: url(${tmp});
`;

const Share = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Result;
