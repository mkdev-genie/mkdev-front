import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const createKakaoButton = (shareImgUrl, shareTitle) => {
  // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
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
        title: '나와 똑 닮은 슈스 개발자는?',
        description: shareTitle,
        imageUrl: shareImgUrl, // i.e. process.env.FETCH_URL + '/logo.png'
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: '바로가기',
          link: {
            webUrl: window.location.href,
          },
        },
      ],
    });
  }
};

const ShareButton = ({
  className,
  children,
  type,
  shareImgUrl,
  shareTitle,
}) => {
  useEffect(() => {
    if (type === 'kakao') createKakaoButton(shareImgUrl, shareTitle);
  }, [type, shareImgUrl, shareTitle]);

  const handleClick = (buttonType) => {
    const PAGE_URL = window.location.href;
    if (buttonType === 'facebook') {
      window.open(`http://www.facebook.com/sharer/sharer.php?u=${PAGE_URL}`);
    } else if (buttonType === 'link') {
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
  shareImgUrl: PropTypes.string,
  shareTitle: PropTypes.string,
};

ShareButton.defaultProps = {
  shareImgUrl:
    'https://github.com/mkdev-genie/mkdev-front/blob/main/public/img-thumbnail.jpg?raw=true',
  shareTitle: '나와 가장 잘 맞는 개발자를 알아보자!',
};

const StyledShareButton = styled.button`
  width: 4em;
  height: 4em;
  margin: ${({ theme }) => theme.spacing(1)};
  border-radius: 1em;
  border: none;
  border: 1px solid ${({ theme }) => theme.color.primary};
  box-sizing: border-box;
  background: transparent;
  outline: none;
  &:hover {
    cursor: pointer;
  }
  &.icon-kakao {
    border: 1px solid ${({ theme }) => theme.color.primary};
  }
  &.icon-facebook {
    border: 1px solid ${({ theme }) => theme.color.secondary};
  }
  &.icon-link {
    border: 1px solid ${({ theme }) => theme.color.gray};
  }
`;

export default ShareButton;
