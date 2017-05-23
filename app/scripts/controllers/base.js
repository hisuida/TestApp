const config = require('../config');
const FooterView = require('ui-components/scripts/views/footer');
const HeaderView = require('ui-components/scripts/views/header');
const BaseController = require('ui-components/scripts/controllers/base');

module.exports = BaseController.extend({
  beforeAction() {
    Application.getView().getRegion('footer').show(new FooterView({
      config: config
    }));

    Application.getView().getRegion('header').show(new HeaderView({
      config: _.extend({}, config,
      {
        routes: Application.routers,
        navbar: {
          items: [
            {name: 'Configuration', url: '#/'},
            {name:'Users', url:'#/users'}
          ]
        }
      })
    }));
  }
});
