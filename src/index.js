import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../src/Routes';
import { ThemeProvider } from 'styled-components';
import theme from './Styles/theme';
import GlobalStyle from './Styles/globalStyles';
import { config } from './config';

const { Kakao } = window;
Kakao.init(`${config.kakao}`);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
