import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SubTitle = ({ children }) => (
  <StyledTitle>
    <StyledBrace>&#123;</StyledBrace>
    {children}
    <StyledBrace>&#125;</StyledBrace>
  </StyledTitle>
);

SubTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledTitle = styled.div`
  position: flex;
  margin-top: ${({ theme }) => theme.spacing[5]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  color: white;
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 35px;
  text-align: center;
`;

const StyledBrace = styled.span`
  padding: 0 ${({ theme }) => theme.spacing[1]};
  color: #e2f063;
`;

export default SubTitle;
