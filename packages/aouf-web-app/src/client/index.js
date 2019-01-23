import React from 'react';
import { hydrate } from 'react-dom';
import { BUNDLE_DOM_NODE_ID } from './constants';
import App from './app';

hydrate(<App />, document.getElementById(BUNDLE_DOM_NODE_ID));
