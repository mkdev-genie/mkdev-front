import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RoundedText = ({ children }) => <StyledText>{children}</StyledText>;

RoundedText.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledText = styled.span`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  margin: 0 ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: 15px;
  color: ${({ theme }) => theme.color.primary};
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.sm};
  text-align: center;
`;

export default RoundedText;
