const ApplicationController = require('../controllers/application');
const SecureRouter = require('ui-components/scripts/routers/secure');

module.exports = SecureRouter.extend({
  controller: new ApplicationController(),
  appRoutes: {
    'error': 'error',
    '': 'defaultRoute'
  }
});
