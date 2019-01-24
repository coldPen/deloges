const fs = require('fs');
const path = require('path');
const express = require('express');
const React = require('react');
const { renderToString, renderToStaticMarkup } = require('react-dom/server');

const {
  DEV_ENV,
  BUNDLE_MANIFEST_OUTPUT,
  BUNDLE_DOM_NODE_ID,
  BUNDLE_SERVER_PATH,
  BUNDLE_CLIENT_PATH,
  BUNDLE_PUBLIC_PATH,
} = require('../constants');

const resolveBuildFile = filename =>
  path.resolve(`./${BUNDLE_SERVER_PATH}/${filename}`);

const SERVER_MANIFEST_PATH = path.resolve(
  `${BUNDLE_SERVER_PATH}/manifest.json`,
);
const CLIENT_MANIFEST_PATH = path.resolve(
  `${BUNDLE_CLIENT_PATH}/manifest.json`,
);

const loadClient = () => {
  const { 'document.js': document, 'app.js': app } = JSON.parse(
    fs.readFileSync(SERVER_MANIFEST_PATH, 'utf8'),
  );
  const { scripts } = JSON.parse(fs.readFileSync(CLIENT_MANIFEST_PATH, 'utf8'));

  return {
    scripts: JSON.parse(fs.readFileSync(CLIENT_MANIFEST_PATH, 'utf8')).scripts,
    Document: require(path.resolve(`${BUNDLE_SERVER_PATH}/${document}`))
      .default,
    App: require(path.resolve(`${BUNDLE_SERVER_PATH}/${app}`)).default,
  };
};

const client = loadClient();

const renderController = (req, res) => {
  const { Document, App, scripts } = DEV_ENV ? loadClient() : client;
  const html = `<!doctype html>\n${renderToStaticMarkup(
    React.createElement(Document, {
      id: BUNDLE_DOM_NODE_ID,
      body: renderToString(React.createElement(App)),
      scripts: scripts.map(src => ({
        src: `${BUNDLE_PUBLIC_PATH}/${src}`,
        key: src,
      })),
    }),
  )}`;
  const styles = html.match(/<style.+\/style>/gi);

  res.send(
    html
      .replace(/<style.+\/style>/gi, '')
      .replace(/<\/head>/, `${styles.join('\n')}</head>`),
  );
};

module.exports = renderController;
