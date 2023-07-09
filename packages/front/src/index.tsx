import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import {ThemeProvider} from "styled-components";
import App from './App';
import {theme} from "./constants/theme";
import i18n from './i18n';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
      </ThemeProvider>
  </React.StrictMode>
);

