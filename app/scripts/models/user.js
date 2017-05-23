const config = require('../config');
const BaseModel = require('ui-components/scripts/models/base');

module.exports = BaseModel.extend({
  url:`${config.api}/users`,
  validation: {
    first_name: {
      required:true
    },
    last_name: {
      required:true
    }
  }
});
