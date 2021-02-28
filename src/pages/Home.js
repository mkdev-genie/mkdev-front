import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import MainTitle from '@/components/MainTitle';
import SubTitle from '@/components/SubTitle';
import BodyText from '@/components/BodyText';
import ShareButton from '@/components/ShareButton';
import Footer from '@/components/Footer';

import ImgMain from '@/assets/images/img-main.png';
import IconWarning from '@/assets/images/icon-warning.png';
import IconFacebook from '@/assets/images/icon-facebook.svg';
import IconKakao from '@/assets/images/icon-kakaotalk.svg';
import IconLink from '@/assets/images/icon-link.svg';

const Parsing = () => {
  const [info, setInfo] = useState();
  useEffect(() => {
    const apiCall = async () => {
      const { data } = await axios.get('https://mkdev.o-r.kr/users');
      const temp = data.result;
      setInfo(temp);
    };
    apiCall();
  }, []);

  if (!info) return null;

  return info;
};

const Timer = ({ realUsers }) => {
  const [users, setUsers] = useState(realUsers - 300);

  useEffect(() => {
    if (users === realUsers) return;
    const interval = setInterval(() => {
      setUsers(users + 1);
    }, 1);
    // eslint-disable-next-line consistent-return
    return () => clearInterval(interval);
  }, [users, realUsers]);
  return users;
};

const Home = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const realUsers = 10000 + Parsing();
  return (
    <Group>
      <NoticeText>과몰입 주의</NoticeText>
      <MainTitle gutterBottom>나와 똑 닮은 슈스 개발자는?</MainTitle>
      <BodyText>
        세상은 넓고 유명한 개발자는 많다.
        <br />
        나와 가장 잘 맞는 개발자는 누구인지 알아보자!
      </BodyText>
      <Image>
        <img src={ImgMain} alt="main thumbnail" />
      </Image>
      <StyledLink to="/question">
        <Button>테스트 시작하기</Button>
      </StyledLink>
      <SubTitle>참여자 수</SubTitle>
      <Count>
        <Timer realUsers={realUsers} />
      </Count>
      <SubTitle>공유하기</SubTitle>
      <Share>
        <ShareButton className="icon-kakao" type="kakao">
          <img src={IconKakao} alt="kakaotalk" />
        </ShareButton>
        <ShareButton className="icon-facebook" type="facebook">
          <img src={IconFacebook} alt="facebook" />
        </ShareButton>
        <ShareButton className="icon-link" type="link">
          <img src={IconLink} alt="link" />
        </ShareButton>
      </Share>
      <Footer />
    </Group>
  );
};

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
`;

const NoticeText = styled.span`
  padding-top: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  font-weight: 500;
  color: ${({ theme }) => theme.color.tertiary};
  background: url(${IconWarning}) no-repeat top center;
  background-size: ${({ theme }) => theme.spacing(2)};
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
  margin: ${({ theme }) => theme.spacing(2)} 0;
  & img {
    width: 100%;
  }
`;

const Count = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 400;
  line-height: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.color.light};
`;

export default Home;
