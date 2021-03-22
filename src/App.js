import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import GlobalFonts from '@/assets/fonts/fonts';

import Theme from './Theme';
import Home from './pages/Home';
import Question from './pages/Question';
import Result from './pages/Result';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500&display=swap');
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

const App = () => (
  <BrowserRouter>
    <Theme>
      <GlobalStyle />
      <GlobalFonts />
      <Route exact path="/" component={Home} />
      <Switch>
        <Route path="/question" component={Question} />
        <Route path="/result/:id" component={Result} />
      </Switch>
    </Theme>
  </BrowserRouter>
);

export default App;
