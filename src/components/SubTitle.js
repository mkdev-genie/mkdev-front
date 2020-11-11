import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SubTitle = ({ children }) => (
  <StyledTitle>
    &#123;
    {children}
    &#125;
  </StyledTitle>
);

SubTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledTitle = styled.div`
  position: flex;
  width: 217px;
  height: 36px;
  left: 80px;
  top: 99px;

  margin-top: 50px;

  font-family: Noto Sans HK;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 35px;
  text-align: center;

  color: #e2f063;
`;

export default SubTitle;
