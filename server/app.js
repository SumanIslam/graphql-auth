const express = require('express');
const expressGraphQL = require('express-graphql');
const session = require('mongoose');
const passport = require("passport");

const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

module.exports = app;