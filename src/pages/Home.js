import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import MainTitle from '@/components/MainTitle';
import SubTitle from '@/components/SubTitle';
import BodyText from '@/components/BodyText';
import RoundedText from '@/components/RoundedText';
import ShareButton from '@/components/ShareButton';
import tmp from '@/assets/images/tmp.png';
import IconFacebook from '@/assets/images/icon-facebook.svg';
import IconKakao from '@/assets/images/icon-kakaotalk.svg';
import IconLink from '@/assets/images/icon-link.svg';

const Home = () => (
  <Group>
    <RoundedText>project. mkdev</RoundedText>
    <MainTitle gutterBottom>개발 포지션 테스트</MainTitle>
    <BodyText>
      개발에도 MBTI가 있다!
      <br />
      나에게 가장 어울리는 개발 포지션은?
    </BodyText>
    <Image>그림</Image>
    <StyledLink to="/question">
      <Button>개발 성향 알아보기</Button>
    </StyledLink>
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

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.dark};
  justify-content: center;
  align-items: center;
`;

const Share = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled.div`
  width: 100%;
  height: 200px;
  margin: ${({ theme }) => theme.spacing(5)} 0;
  background-image: url(${tmp});
`;

export default Home;
