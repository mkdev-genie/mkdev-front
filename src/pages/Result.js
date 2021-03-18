/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Loading from '@/components/Loading';
import MainTitle from '@/components/MainTitle';
import SubTitle from '@/components/SubTitle';
import BodyText from '@/components/BodyText';
import Button from '@/components/Button';
import RoundedText from '@/components/RoundedText';
import ShareButton from '@/components/ShareButton';
import ListItem from '@/components/ListItem';

import IconFacebook from '@/assets/images/icon-facebook.svg';
import IconKakao from '@/assets/images/icon-kakaotalk.svg';
import IconLink from '@/assets/images/icon-link.svg';
import ImgQuote from '@/assets/images/img-quote.png';

const Parsing = (resultIdx, isUserBool) => {
  const [info, setInfo] = useState();
  useEffect(() => {
    const apiCall = async () => {
      await axios
        .post('https://mkdev.o-r.kr/results', {
          result: resultIdx,
          isUser: isUserBool,
        })
        .then((response) => {
          setInfo(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    apiCall();
  }, [resultIdx, isUserBool]);

  if (!info) return null;

  return info;
};

const Result = ({ location, match }) => {
  const locState = location.state;
  const resultIdx = match.params.id;

  let isUserBool = true;
  if (locState === undefined) {
    isUserBool = false;
  }
  const info = Parsing(resultIdx, isUserBool);

  if (!info) return <Loading />;
  return (
    <>
      <Helmet>
        <meta
          property="og:description"
          content={`${info.summary} ${info.nameKR}`}
        />
        <meta
          property="og:image"
          content={require(`@/assets/images/img-result${resultIdx}.png`)}
        />
      </Helmet>
      <Group>
        <RoundedText>나와 가장 어울리는 개발자는</RoundedText>
        <MainTitle>{info.nameKR}</MainTitle>
        <BodyText>
          {info.nameEN}
          <VerticalLine />
          {info.summary}
        </BodyText>
        <Image>
          <img
            src={require(`@/assets/images/img-result${resultIdx}.png`)}
            alt="result thumbnail"
          />
        </Image>
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
          <ShareButton
            className="icon-kakao"
            type="kakao"
            shareImgUrl={`https://github.com/mkdev-genie/mkdev-front/blob/main/src/assets/images/img-result${resultIdx}.png?raw=true`}
            shareTitle={`${info.summary} ${info.nameKR}`}
          >
            <img src={IconKakao} alt="kakaotalk" />
          </ShareButton>
          <ShareButton className="icon-facebook" type="facebook">
            <img src={IconFacebook} alt="facebook" />
          </ShareButton>
          <ShareButton className="icon-link" type="link">
            <img src={IconLink} alt="link" />
          </ShareButton>
        </Share>
        <StyledLink to="/">
          <Button>다시하기</Button>
        </StyledLink>
      </Group>
    </>
  );
};

Result.propTypes = {
  location: PropTypes.node.isRequired,
  match: PropTypes.node.isRequired,
};

const StyledLink = styled(Link)`
  display: block;
  margin-top: ${({ theme }) => theme.spacing(4)};
  width: 100%;
`;

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
  line-height: ${({ theme }) => theme.spacing(2.5)};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 400;
  color: ${({ theme }) => theme.color.light};
`;

const QuotesSubtitle = styled.p`
  margin-top: ${({ theme }) => theme.spacing(1)};
  text-align: center;
  line-height: ${({ theme }) => theme.spacing(2.5)};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 400;
  font-style: italic;
  color: ${({ theme }) => theme.color.gray};
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  width: 100%;
  margin: ${({ theme }) => theme.spacing(2)} 0;
  & img {
    width: 100%;
  }
`;

const Share = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Result;
