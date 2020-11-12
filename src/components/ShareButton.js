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
  border: 2px solid #e2f063;
  background-color: black;
  box-sizing: border-box;
  &.icon-kakao {
    border: 3px solid #e2f063;
  }
  &.icon-kakao:hover {
    background-color: #e2f063;
  }
  &.icon-facebook {
    border: 3px solid #553ff5;
  }
  &.icon-facebook:hover {
    background-color: #553ff5;
  }
  &.icon-link {
    border: 3px solid gray;
  }
  &.icon-link:hover {
    background-color: gray;
  }
`;

export default ShareButton;
