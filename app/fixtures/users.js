var allUsers = [{
  id: 1,
first_name: 'John',
last_name: 'Doe'
}, {
  id: 2,
  first_name: 'Jane',
  last_name: 'Doe'
}];

$.mockjax({
  url: /^.*\/users\/token\/.*$/,
  responseText: {
    "user":{
      "id"         : "1",
      "first_name" : "Virtual",
      "last_name"  : "Hold",
      "username"   : "admin",
      "email"      : "",
      "location"   : "/users/admin"
    }
  }
});

var nextId= 3;

$.mockjax({
  url: /^.*\/users$/,
  type: 'POST',
  response: function(request){
    const newUser = JSON.parse(request.data);
    newUser.id = nextId ++;
    allUsers.push(newUser);
    this.responseText = JSON.stringify(newUser);
  }
});

$.mockjax({
  url: /^.*\/users$/,
  type: 'GET',
  responseText: JSON.stringify(allUsers)
});


