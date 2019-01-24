import React from 'react';
import PropTypes from 'prop-types';
import App from './app';

const Document = ({ id = 'app', links = [], scripts = [] }) => (
  <html>
    <head>
      <title>App</title>
      {links.map(link => (
        <link {...link} />
      ))}
    </head>
    <body>
      <div id={id}>
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
