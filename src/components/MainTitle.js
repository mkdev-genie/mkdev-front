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
  position: flex;

  margin-bottom: 20px;

  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  text-align: center;

  color: white;
`;

const StyledBrace = styled.span`
  padding: 0 10px;
  color: #553ff5;
`;

export default MainTitle;
