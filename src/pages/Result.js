import React from 'react';
import styled from 'styled-components';
import MainTitle from '@/components/MainTitle';
import SubTitle from '@/components/SubTitle';
import BodyText from '@/components/BodyText';
import RoundedText from '@/components/RoundedText';
import ShareButton from '@/components/ShareButton';
import ListItem from '@/components/ListItem';
import tmp from '@/assets/images/tmp.png';
import IconFacebook from '@/assets/images/icon-facebook.svg';
import IconKakao from '@/assets/images/icon-kakaotalk.svg';
import IconLink from '@/assets/images/icon-link.svg';
import ImgQuote from '@/assets/images/img-quote.png';

const Result = () => (
  <Group>
    <RoundedText>나와 가장 어울리는 개발자는</RoundedText>
    <MainTitle>에이다 러브레이스</MainTitle>
    <BodyText>
      Ada Lovelace
      <VerticalLine />
      컴퓨터 언어의 창시자
    </BodyText>
    <Image />
    <Quotes img={ImgQuote}>
      <QuotesTitle>
        중요한 목표는 계산을 완료하는 데 필요한 시간을 최소한으로 줄이는 배열을
        선택하는 것이다.
      </QuotesTitle>
      <QuotesSubtitle>
        One essential object is to choose that arrangement which shall tend to
        reduce to a minimum the time necessary for completing the calculation.
      </QuotesSubtitle>
    </Quotes>
    <SubTitle>당신은 이런 사람</SubTitle>
    <ul>
      <ListItem>체계적이고 효율적인 코드를 사랑해요.</ListItem>
      <ListItem>
        자기만의 시간을 갖고 사색한 내용을 글로 남기는 것을 좋아해요.
      </ListItem>
      <ListItem>체계적이고 효율적인 코드를 사랑해요.</ListItem>
      <ListItem>
        자기만의 시간을 갖고 사색한 내용을 글로 남기는 것을 좋아해요.
      </ListItem>
      <ListItem>
        자기만의 시간을 갖고 사색한 내용을 글로 남기는 것을 좋아해요.
      </ListItem>
    </ul>
    <SubTitle>내 결과 공유하기</SubTitle>
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

const VerticalLine = styled.span`
  display: inline-block;
  width: 1px;
  height: 12px;
  margin: 0 ${({ theme }) => theme.spacing(1)};
  vertical-align: middle;
  background-color: ${({ theme }) => theme.color.gray};
`;

const Quotes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing(7)};
  background: url(${(props) => props.img}) no-repeat top center;
  background-size: 45px auto;
`;

const QuotesTitle = styled.p`
  text-align: center;
  line-height: 1.2rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 300;
  color: ${({ theme }) => theme.color.light};
`;

const QuotesSubtitle = styled.p`
  margin-top: ${({ theme }) => theme.spacing(1)};
  text-align: center;
  line-height: 1.2rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 300;
  font-style: italic;
  color: ${({ theme }) => theme.color.gray};
`;

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
  margin: ${({ theme }) => theme.spacing(5)} 0;
  background-image: url(${tmp});
`;

const Share = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Result;
