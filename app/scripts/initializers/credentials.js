const beforeSend = require('ui-components/scripts/lib/ajax-setup').beforeSend;
const config = require('../config');

var authorizationRequest;

module.exports = function() {
  this.credentialsFull = false;
  const url = config.authApi.endpoint + '/authorizations/SystemManagement';
  authorizationRequest = $.ajax(url, {
    beforeSend: function(jqXhr, settings) {
      const result = beforeSend(jqXhr, settings);
      jqXhr.setRequestHeader('Client-Id', 'xxxxxx-GOOD-xxxxxx');
      return result && true;
    },
    data: { permission: 'write' }
  }).done(() => {
    this.credentialsFull = true;
  });

  this.globalRadioChannel.reply('authorizationRequest', function() {
    return authorizationRequest;
  });
};
