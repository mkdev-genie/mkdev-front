import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ShareButton = ({ className, children, type }) => {
  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    console.log(window.Kakao);
    if (window.Kakao) {
      const kakao = window.Kakao;
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }
      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '타이틀',
          description: '#리액트 #카카오 #공유버튼',
          imageUrl:
            'https://cdn.vox-cdn.com/thumbor/ngQ0Dft-omo2WhyiXmDJSYvgCBY=/0x0:1200x669/1200x800/filters:focal(504x238:696x430)/cdn.vox-cdn.com/uploads/chorus_image/image/64581600/1829267.0.jpg', // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        social: {
          likeCount: 77,
          commentCount: 55,
          sharedCount: 333,
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          {
            title: '앱으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };
  useEffect(() => {
    createKakaoButton();
  }, []);
  const handleClick = (buttonType) => {
    const PAGE_URL = window.location.href;
    if (buttonType === 'kakao') {
      console.log(buttonType);
    } else if (buttonType === 'facebook') {
      window.open(
        `http://www.facebook.com/sharer/sharer.php?u=https://mkdev.netlify.app/`,
      );
      console.log(buttonType);
    } else {
      const dummy = document.createElement('input');
      document.body.appendChild(dummy);
      dummy.value = PAGE_URL;
      dummy.select();
      document.execCommand('copy');
      document.body.removeChild(dummy);
      // eslint-disable-next-line no-alert
      alert('URL이 복사되었습니다!');
    }
  };

  return (
    <StyledShareButton
      id={type === 'kakao' ? 'kakao-link-btn' : ''}
      className={className}
      type={type}
      onClick={() => handleClick(type)}
    >
      {children}
    </StyledShareButton>
  );
};

ShareButton.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};

const StyledShareButton = styled.button`
  width: 4em;
  height: 4em;
  margin: ${({ theme }) => theme.spacing(1)};
  border-radius: 1em;
  border: none;
  border: 1px solid ${({ theme }) => theme.color.primary};
  background-color: black;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
  &.icon-kakao {
    border: 1px solid ${({ theme }) => theme.color.primary};
  }
  &.icon-kakao:hover {
    background-color: ${({ theme }) => theme.color.primary};
  }
  &.icon-facebook {
    border: 1px solid ${({ theme }) => theme.color.secondary};
  }
  &.icon-facebook:hover {
    background-color: ${({ theme }) => theme.color.secondary};
  }
  &.icon-link {
    border: 1px solid ${({ theme }) => theme.color.gray};
  }
  &.icon-link:hover {
    background-color: ${({ theme }) => theme.color.gray};
  }
`;

export default ShareButton;
