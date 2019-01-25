import React from 'react';
import PropTypes from 'prop-types';
import StaticWrapper from './components/App/StaticWrapper';
import App from './components/App';
import { BUNDLE_DOM_NODE_ID } from './constants';

const Document = ({
  location,
  staticContext,
  scripts = [],
  lang = 'fr',
  dir = 'ltr',
}) => (
  <html lang={lang} dir={dir}>
    <head>
      <title>App</title>
    </head>
    <body>
      <div id={BUNDLE_DOM_NODE_ID}>
        <StaticWrapper location={location} context={staticContext}>
          <App />
        </StaticWrapper>
      </div>
      {scripts.map(script => (
        <script {...script} />
      ))}
    </body>
  </html>
);

Document.propTypes = {
  location: PropTypes.string,
  staticContext: PropTypes.object,
  scripts: PropTypes.arrayOf(PropTypes.object.isRequired),
  lang: PropTypes.string,
  dir: PropTypes.string,
};

export default Document;
