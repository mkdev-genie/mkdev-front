import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: red;
  border: none;
  background-color: gray;
`;

const Button = ({ children }) => <StyledButton>{children}</StyledButton>;

export default Button;
