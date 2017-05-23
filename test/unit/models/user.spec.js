const UserModel = require('../../../app/scripts/models/user');

describe('User Model', function() {
  it('uses correct url for create', function(done){
    const model = new UserModel({
    first_name: 'John',
    last_name:'Doe'
    });

    $.mockjax({
      url: /^.*\/users$/,
      type: 'POST',
      response: function(request){
        this.responseTest = request.data;
        done();
      }
    });

    model.save();
  });
  describe('validation', function(){
    it('returns true when first_name and last_name are set', function(){
          const model = new UserModel({
    first_name: 'John',
    last_name:'Doe'
    });
    expect(model.isValid(true)).to.be.true;
    });
    it('returns false when first_name is not set', function(){
      const model = new UserModel({
    last_name:'Doe'
    });
      expect(model.isValid(true)).to.be.false;
    });
      it('returns false when last_name is not set', function(){
      const model = new UserModel({
    first_name: 'John'
    });
      expect(model.isValid(true)).to.be.false;
  });
    });
});
