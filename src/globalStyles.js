import { createGlobalStyle } from 'styled-components';

import NotoSansKRDemiLightOtf from '@/assets/fonts/NotoSansKR-DemiLight.otf';
import NotoSansKRDemiLightWoff from '@/assets/fonts/NotoSansKR-DemiLight.woff';
import NotoSansKRDemiLightWoff2 from '@/assets/fonts/NotoSansKR-DemiLight.woff2';
import NotoSansKRMediumOtf from '@/assets/fonts/NotoSansKR-Medium.otf';
import NotoSansKRMediumWoff from '@/assets/fonts/NotoSansKR-Medium.woff';
import NotoSansKRMediumWoff2 from '@/assets/fonts/NotoSansKR-Medium.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-style: normal;
    src: url(${NotoSansKRDemiLightOtf}) format('otf'),
    url(${NotoSansKRDemiLightWoff}) format('woff'),
    url(${NotoSansKRDemiLightWoff2}) format('woff2');
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-style: normal;
    src: url(${NotoSansKRMediumOtf}) format('otf'),
    url(${NotoSansKRMediumWoff}) format('woff'),
    url(${NotoSansKRMediumWoff2}) format('woff2');
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: inherit;
    vertical-align: baseline;
    word-break: keep-all;
    -webkit-font-smoothing: antialiased;
    font-family: "Noto Sans KR", Helvetica, Arial, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body {
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    line-height: ${({ theme }) => theme.spacing(1)};
    background-color: ${({ theme }) => theme.color.dark};
  }
  #root {
    width: 100%;
    max-width: 414px;
    padding: ${({ theme }) => theme.spacing(5)} ${({ theme }) =>
  theme.spacing(2)};
  }
`;
