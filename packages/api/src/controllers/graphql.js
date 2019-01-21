const Router = require('express-promise-router');
const { ApolloServer } = require('apollo-server-express');
const schema = require('../schema');
const { GRAPHQL_ENDPOINT } = require('../constants');

const graphqlController = Router();
const server = new ApolloServer({
  schema,
  context: ({ req }) => req,
  playground: {
    endpoint: GRAPHQL_ENDPOINT,
    settings: {
      'editor.cursorShape': 'line',
      'request.credentials': 'include'
    }
  }
});
server.applyMiddleware({ app: graphqlController, path: '/' });

module.exports = graphqlController;
