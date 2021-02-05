import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

const Parsing = () => {
  const [info, setInfo] = useState();
  useEffect(() => {
    const apiCall = async () => {
      const { data } = await axios.get('http://13.124.204.130:3000/users');
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
  const realUsers = 10000 + Parsing();
  return (
    <Group>
      <RoundedText>project. mkdev</RoundedText>
      <MainTitle gutterBottom>나와 어울리는 개발자 찾기</MainTitle>
      <BodyText>
        세상은 넓고 유명한 개발자는 많다.
        <br />
        나와 가장 잘 맞는 개발자는 누구인지 알아보자!
      </BodyText>
      <Image>그림</Image>
      <StyledLink to="/question">
        <Button>테스트 시작하기</Button>
      </StyledLink>
      <SubTitle>참여자 수</SubTitle>
      <Count>
        <Timer realUsers={realUsers} />
      </Count>
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
};

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

const Count = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 400;
  color: ${({ theme }) => theme.color.light};
`;

export default Home;
