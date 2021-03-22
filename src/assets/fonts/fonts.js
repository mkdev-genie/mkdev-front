import { createGlobalStyle } from 'styled-components';
import NotoSansKRDemiLightOtf from './NotoSansKR-DemiLight.otf';
import NotoSansKRDemiLightWoff from './NotoSansKR-DemiLight.woff';
import NotoSansKRDemiLightWoff2 from './NotoSansKR-DemiLight.woff2';
import NotoSansKRMediumOtf from './NotoSansKR-Medium.otf';
import NotoSansKRMediumWoff from './NotoSansKR-Medium.woff';
import NotoSansKRMediumWoff2 from './NotoSansKR-Medium.woff2';

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
`;
