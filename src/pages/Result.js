import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loading from '@/components/Loading';
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

const Parsing = (resultIdx) => {
  const [info, setInfo] = useState();
  useEffect(() => {
    const apiCall = async () => {
      await axios
        .post('https://mkdev.o-r.kr/results', {
          result: resultIdx,
        })
        .then((response) => {
          setInfo(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    apiCall();
  }, [resultIdx]);

  if (!info) return null;

  return info;
};

const Result = ({ match }) => {
  const resultIdx = match.params.id;
  const info = Parsing(resultIdx);

  if (!info) return <Loading />;
  return (
    <Group>
      <RoundedText>나와 가장 어울리는 개발자는</RoundedText>
      <MainTitle>{info.nameKR}</MainTitle>
      <BodyText>
        {info.nameEN}
        <VerticalLine />
        {info.summary}
      </BodyText>
      <Image />
      <Quotes img={ImgQuote}>
        <QuotesTitle>{info.quoteKR}</QuotesTitle>
        <QuotesSubtitle>{info.quoteEN}</QuotesSubtitle>
      </Quotes>
      <SubTitle>당신은 이런 사람</SubTitle>
      <ul>
        {info.descriptions.map((i) => (
          <ListItem>{i}</ListItem>
        ))}
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
};

Result.propTypes = {
  match: PropTypes.node.isRequired,
};

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
