import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BodyText = ({ children }) => <StyledText>{children}</StyledText>;

BodyText.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledText = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  text-align: center;
  line-height: ${({ theme }) => theme.spacing(3)};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 400;
  color: ${({ theme }) => theme.color.light};
`;

export default BodyText;
