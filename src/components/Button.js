import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ onClick, type, children, id }) => (
  <StyledButton onClick={onClick} type={type} id={id}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  onClick: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired,
};

const StyledButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(2)};
  color: ${({ type, theme }) =>
    type === 'light' ? theme.color.primary : theme.color.dark};
  border: ${({ type, theme }) =>
    type === 'light' ? `1px solid ${theme.color.primary}` : 'none'};
  border-radius: 10px;
  background: ${({ type, theme }) =>
    type === 'light' ? 'transparent' : theme.color.primary};
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.md};
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

export default Button;
