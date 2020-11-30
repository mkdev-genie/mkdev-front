import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RoundedText = ({ children }) => <StyledText>{children}</StyledText>;

RoundedText.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledText = styled.div`
  padding: 5px 15px;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: 15px;
  color: ${({ theme }) => theme.color.primary};
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
`;

export default RoundedText;
