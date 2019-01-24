const fs = require('fs');
const path = require('path');
const express = require('express');
const React = require('react');
const { renderToString, renderToStaticMarkup } = require('react-dom/server');

const {
  DEV_ENV,
  BUNDLE_MANIFEST_OUTPUT,
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
  const { 'main.js': component } = JSON.parse(
    fs.readFileSync(SERVER_MANIFEST_PATH, 'utf8'),
  );

  return {
    scripts: JSON.parse(fs.readFileSync(CLIENT_MANIFEST_PATH, 'utf8')).scripts,
    Component: require(path.resolve(`${BUNDLE_SERVER_PATH}/${component}`))
      .default,
  };
};

const client = loadClient();

const renderController = (req, res) => {
  const { Component, scripts } = DEV_ENV ? loadClient() : client;
  const staticContext = {};
  const output = `<!doctype html>\n${renderToString(
    React.createElement(Component, {
      staticContext,
      location: req.url,
      scripts: scripts.map(src => ({
        src: `${BUNDLE_PUBLIC_PATH}/${src}`,
        key: src,
      })),
    }),
  )}`
    // move styles from body to the head
    .replace(/(<\/head>[\s]*<body[\s>].*)(<style.+\/style>)/gi, '$2$1');

  if (staticContext.url) {
    res.redirect(
      staticContext.statusCode === 301 ? 301 : 302,
      staticContext.url,
    );
  } else {
    res.status(staticContext.statusCode || 200).send(output);
  }
};

module.exports = renderController;
