import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ShareButton = ({ className, children, type }) => {
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
