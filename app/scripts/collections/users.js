const config = require('../config');
const UserModel = require('../models/user');

module.exports = Backbone.Collection.extend({
  url:`${config.api}/users`,
  model: UserModel

});
