const UsersController = require('../controllers/users');
const SecureRouter = require('ui-components/scripts/routers/secure');

module.exports = SecureRouter.extend({
  controller: new UsersController(),
  appRoutes: {
    'users': 'showUserList'
  }
});
