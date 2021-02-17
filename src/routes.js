const Router = require('express').Router;

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({hello: 'world'});
})

module.exports = routes;