import React from 'react';
import styled from 'styled-components';
import IconGithub from '@/assets/images/icon-github.png';

const Footer = () => (
  <StyledFooter>
    <a
      href="https://github.com/mkdev-genie"
      target="_blank"
      rel="noreferrer noopener"
    >
      © 2021 project. mkdev
    </a>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  padding-top: ${({ theme }) => theme.spacing(5)};
  margin-top: ${({ theme }) => theme.spacing(10)};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.color.tertiary};
  background: url(${IconGithub}) no-repeat top center;
  background-size: ${({ theme }) => theme.spacing(3)};
`;

export default Footer;
