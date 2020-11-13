import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ onClick, type, children }) => {
  if (type === 'light')
    return (
      <StyledLight onClick={onClick} type={type}>
        {children}
      </StyledLight>
    );
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

const StyledLight = styled.button`
  width: 335px;
  padding: 0.3rem;
  border: 2px solid #e2f063;
  border-radius: 10px;
  background: transparent;
  color: #e2f063;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  &:hover {
    cursor: pointer;
    background: yellow;
  }
`;

const StyledButton = styled.button`
  width: 335px;
  padding: 0.5rem;
  border: none;
  border-radius: 10px;
  background: #e2f063;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  &:hover {
    cursor: pointer;
    background: yellow;
  }
`;

export default Button;
