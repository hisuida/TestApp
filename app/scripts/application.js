require('ui-components/scripts/lib/ajax-setup');
require('./vendor');
require('./lib/sync');

const config = require('./config');
const ApplicationLayoutView = require('ui-components/scripts/views/application-layout');

module.exports = Backbone.Marionette.Application.extend({
  region: '#application-layout',

  routers: [
    new (require('./routers/application'))(),
    new (require('./routers/users'))(),
    new (require('ui-components/scripts/routers/authentication'))(),
  ],

  initialize: function() {
    require('ui-components/scripts/initializers/all').call(this);
    require('./initializers/credentials').call(this);

    this.history = Backbone.history;
    this.config = config;

    this.on('start', function() {
      this.history.start({
        hashChange: true,
        pushState: false
      });
    });

    this.showView(new ApplicationLayoutView());
  },

  stop: function() {
    Backbone.history.stop();
  },

  redirectToError: function() {
    Backbone.history.navigate('#/error');
  }
});
