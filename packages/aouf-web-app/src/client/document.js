import React from 'react';
import PropTypes from 'prop-types';

const Document = ({ id = 'app', body = '', links = [], scripts = [] }) => (
  <html>
    <head>
      <title>App</title>
      {links.map(link => (
        <link {...link} />
      ))}
    </head>
    <body>
      <div id={id} dangerouslySetInnerHTML={{ __html: body }} />
      {scripts.map(script => (
        <script {...script} />
      ))}
    </body>
  </html>
);

Document.propTypes = {
  id: PropTypes.string,
  body: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
  scripts: PropTypes.arrayOf(PropTypes.object),
};

export default Document;
