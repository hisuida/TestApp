const template = require('../../../templates/users/index.hbs');
const UsersTableView = require('./users-table');
const AddUserModalView = require('./modals/add-user');
const UserModel = require('../../models/user');

module.exports = Backbone.Marionette.View.extend({
  template: template,
  regions: {
    usersTable: {
      el: '[data-region="usersTable"]',
      replaceElement: true
    }
  },
ui: {
addUserButton: '[data-action="add"]'
},

events: {
  'click @ui.addUserButton':'onAddUserClicked'
},

  onRender() {
    const usersCollection = this.options.users;
    const usersTableView = new UsersTableView({
      collection: usersCollection
    });
    this.showChildView('usersTable', usersTableView);
  },
  onAddUserClicked(){
    const newUser = new UserModel();
    const modal = new AddUserModalView({
      model: newUser
    });

    this.listenTo(modal,'save',()=> {
      this.options.users.push(newUser);
      this.render();
    });
    modal.show();
  }
});
