import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ShareButton = ({ type, children }) => (
  <StyledShareButton className={type}>{children}</StyledShareButton>
);

ShareButton.propTypes = {
  type: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

const StyledShareButton = styled.button`
  width: 4em;
  height: 4em;
  margin-right: 10px;
  margin-bottom: 50px;
  border-radius: 1em;
  border: none;
  border: 2px solid #e2f063;
  background-color: white;
  box-sizing: border-box;
  &.icon-kakao {
    border: 2px solid #e2f063;
  }
  &.icon-facebook {
    border: 2px solid #e2f063;
  }
  &.icon-link {
    border: 2px solid gray;
  }
`;

export default ShareButton;
