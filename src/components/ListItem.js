import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImgPoundkey from '@/assets/images/img-poundkey.png';

const ListItem = ({ children }) => (
  <StyledText img={ImgPoundkey}>{children}</StyledText>
);

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledText = styled.li`
  padding-left: ${({ theme }) => theme.spacing(2.5)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  line-height: ${({ theme }) => theme.spacing(3)};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 400;
  color: ${({ theme }) => theme.color.light};
  background: url(${(props) => props.img}) no-repeat left 8px;
  background-size: 10px auto;
`;

export default ListItem;
