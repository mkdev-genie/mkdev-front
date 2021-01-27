import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MainTitle = ({ children }) => (
  <StyledTitle>
    <StyledBrace>&#123;</StyledBrace>
    {children}
    <StyledBrace>&#125;</StyledBrace>
  </StyledTitle>
);

MainTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledTitle = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 500;
  line-height: 35px;
  text-align: center;
  color: ${({ theme }) => theme.color.light};
`;

const StyledBrace = styled.span`
  padding: 0 ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.color.secondary};
`;

export default MainTitle;
