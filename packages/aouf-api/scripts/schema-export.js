const fs = require('fs');
const path = require('path');
const { graphql } = require('graphql');
const { introspectionQuery, printSchema } = require('graphql/utilities');
const schema = require('../src/schema');

// Save JSON of full schema introspection for Babel Relay Plugin to use
(async () => {
  let result;
  let errors;

  try {
    result = await graphql(schema, introspectionQuery);
  } catch (e) {
    errors = [e];
  }

  errors = errors || result.errors;

  if (errors) {
    // eslint-disable-next-line no-console
    console.error(
      '👎  ERROR introspecting schema: ',
      JSON.stringify(errors, null, 2),
    );
  } else {
    fs.writeFileSync(
      path.join(__dirname, '../schema.json'),
      JSON.stringify(result, null, 2),
    );
    // eslint-disable-next-line no-console
    process.exit(0);
  }
})();

// Save user readable type system shorthand of schema
fs.writeFileSync(
  path.join(__dirname, '../schema.graphql'),
  printSchema(schema),
);

// eslint-disable-next-line no-console
console.error('👍  schema exported: ');
