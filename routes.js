const routes = require('next-routes');

module.exports = routes()
  .add('tv', '/tv')
  .add('custom-server', '/custom-server');
