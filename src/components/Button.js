import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: red;
  border: none;
  background-color: gray;
`;

const Button = () => (
  <StyledButton>button</StyledButton>
);

export default Button;
