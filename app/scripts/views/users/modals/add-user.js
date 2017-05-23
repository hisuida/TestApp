const Modal = require('ui-components/scripts/views/modal');
const template = require('../../../../templates/users/modals/add-user.hbs');
const apiHelper = require('ui-components/scripts/lib/api-helper');

module.exports = Modal.extend({
  id: 'add-user-modal',
  template: template,
  behaviors: {
    FormFields: {
      fields: {
        first_name:'first_name',
        last_name: 'last_name'
      }
    }
  },
  events: {
    'submit': 'onSubmit'
  },
  onSubmit(submitEvent){
    submitEvent.preventDefault();
    submitEvent.stopPropagation();

    if(this.model.isValid(true)) {
      this.model.save().done(()=> {
        Application.globalRadioChannel.trigger('notification','success','User Saved Sccessfully');
        this.hide();
        this.trigger('save');
      }).fail((jqXHR)=>{
        apiHelper.handleFailure(jqXHR,'Unable to Save User', this);
      });
    }
  }

});
