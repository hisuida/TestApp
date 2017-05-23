const BaseController = require('./base');
const UsersCollection = require('../collections/users');
const UsersIndexView = require('../views/users/index');

module.exports = BaseController.extend({
   showUserList(){
   // load data
   const allUsers = new UsersCollection();

   const usersView = new UsersIndexView({
    users: allUsers
   });

this.transitionContent(usersView, [
  allUsers.fetch()
  ]);
   //when done, display view
   }
});
