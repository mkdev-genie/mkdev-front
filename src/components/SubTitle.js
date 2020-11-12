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
  margin-top: 50px;
  color: white;
  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 35px;
  text-align: center;
`;

const StyledBrace = styled.span`
  padding: 0 10px;
  color: #e2f063;
`;

export default SubTitle;
