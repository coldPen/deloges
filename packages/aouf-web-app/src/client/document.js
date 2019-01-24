import React from 'react';
import PropTypes from 'prop-types';
import App from './app';
import { BUNDLE_DOM_NODE_ID } from './constants';

const Document = ({ links = [], scripts = [] }) => (
  <html>
    <head>
      <title>App</title>
      {links.map(link => (
        <link {...link} />
      ))}
    </head>
    <body>
      <div id={BUNDLE_DOM_NODE_ID}>
        <App />
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
