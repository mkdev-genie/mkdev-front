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
  border-radius: 1em;
  border: none;
  margin-right: 10px;
  margin-bottom: 50px;

  border: 2px solid #e2f063;
  box-sizing: border-box;
`;

export default ShareButton;
