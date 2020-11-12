import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RoundedText = ({ children }) => <StyledText>{children}</StyledText>;

RoundedText.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledText = styled.div`
  padding: 0.3rem;
  margin-top: 15px;
  margin-bottom: 20px;
  border: 2px solid #e2f063;
  border-radius: 15px;
  color: #e2f063;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;

export default RoundedText;
