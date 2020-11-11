import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RoundedText = ({ children }) => <StyledText>{children}</StyledText>;

RoundedText.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledText = styled.div`
  border: solid;
  border-radius: 15px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  padding: 0.3rem;
  color: #e2f063;

  margin-top: 15px;
  margin-bottom: 20px;
`;

export default RoundedText;
