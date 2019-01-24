import React from 'react';
import PropTypes from 'prop-types';
import StaticWrapper from './components/App/StaticWrapper';
import App from './components/App';
import { BUNDLE_DOM_NODE_ID } from './constants';

const Document = ({ location, staticContext, links = [], scripts = [] }) => (
  <html>
    <head>
      <title>App</title>
      {links.map(link => (
        <link {...link} />
      ))}
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
  id: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
  scripts: PropTypes.arrayOf(PropTypes.object),
};

export default Document;
