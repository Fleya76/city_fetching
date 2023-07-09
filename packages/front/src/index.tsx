import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import { I18nextProvider } from 'react-i18next';
import {ThemeProvider} from "styled-components";
import App from './App';
import {theme} from "./constants/theme";
import i18n from './i18n';
import { store } from './stores';

const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <I18nextProvider i18n={i18n}>
                <App />
              </I18nextProvider>
              </ThemeProvider>
          </Provider>
      </ApolloProvider>
  </React.StrictMode>
);

