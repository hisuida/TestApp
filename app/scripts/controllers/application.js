const BaseController = require('./base');
const ErrorView = require('ui-components/scripts/views/error');
const ApplicationIndexView = require('../views/application/index');
const config = require('../config');

module.exports = BaseController.extend({

  defaultRoute() {
    Backbone.history.navigate(config.defaultRoute);
    this.transitionContent(new ApplicationIndexView());
  },

  error() {
    this.transitionContent(new ErrorView());
  }
});
