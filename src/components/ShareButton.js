import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ShareButton = ({ className, children }) => (
  <StyledShareButton className={className}>{children}</StyledShareButton>
);

ShareButton.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const StyledShareButton = styled.button`
  width: 4em;
  height: 4em;
  margin: 0 5px;
  border-radius: 1em;
  border: none;
  border: 2px solid ${({ theme }) => theme.color.primary};
  background-color: black;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
  &.icon-kakao {
    border: 3px solid ${({ theme }) => theme.color.primary};
  }
  &.icon-kakao:hover {
    background-color: ${({ theme }) => theme.color.primary};
  }
  &.icon-facebook {
    border: 3px solid ${({ theme }) => theme.color.secondary};
  }
  &.icon-facebook:hover {
    background-color: ${({ theme }) => theme.color.secondary};
  }
  &.icon-link {
    border: 3px solid ${({ theme }) => theme.color.gray};
  }
  &.icon-link:hover {
    background-color: ${({ theme }) => theme.color.gray};
  }
`;

export default ShareButton;
