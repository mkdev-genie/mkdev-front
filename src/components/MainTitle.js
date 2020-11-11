import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MainTitle = ({ children }) => (
  <StyledTitle>
    &#123;
    {children}
    &#125;
  </StyledTitle>
);

MainTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledTitle = styled.div`
  position: flex;
  width: 217px;
  height: 36px;
  left: 80px;
  top: 99px;

  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  text-align: center;

  color: #553ff5;
`;

export default MainTitle;
