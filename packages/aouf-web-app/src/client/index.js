import React from 'react';
import { hydrate } from 'react-dom';
import { BUNDLE_DOM_NODE_ID } from './constants';
import ClientWrapper from './components/App/ClientWrapper';
import App from './components/App';

hydrate(
  <ClientWrapper>
    <App />
  </ClientWrapper>,
  document.getElementById(BUNDLE_DOM_NODE_ID),
);
