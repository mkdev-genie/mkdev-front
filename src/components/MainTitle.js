import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MainTitle = ({ children, gutterBottom }) => (
  <StyledTitle gutterBottom={gutterBottom}>
    <StyledBrace>&#123;</StyledBrace>
    {children}
    <StyledBrace>&#125;</StyledBrace>
  </StyledTitle>
);

MainTitle.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/require-default-props
  gutterBottom: PropTypes.bool,
};

const StyledTitle = styled.div`
  margin-bottom: ${({ gutterBottom, theme }) =>
    gutterBottom ? theme.spacing(3) : theme.spacing(1)};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 500;
  line-height: ${({ theme }) => theme.spacing(4)};
  text-align: center;
  color: ${({ theme }) => theme.color.light};
`;

const StyledBrace = styled.span`
  padding: 0 ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.color.secondary};
`;

export default MainTitle;
