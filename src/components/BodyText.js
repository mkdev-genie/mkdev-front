import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BodyText = ({ children }) => <StyledText>{children}</StyledText>;

BodyText.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledText = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[1]};
  text-align: center;
  line-height: 1.2rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 300;
  color: ${({ theme }) => theme.color.light};
`;

export default BodyText;
