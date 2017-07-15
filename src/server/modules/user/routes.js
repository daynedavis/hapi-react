'use strict';

const User = require('./models/user');

module.exports = [
  {
    method: 'GET',
    path: '/api/users',
    handler: function (request, reply) {
      User.find({}, function(err, users) {
        reply(users);  
      });
    }
  },
  {
    method: 'POST',
    path: '/api/users',
    handler: function (request, reply) {
      const { name } = request.payload;

      var newUser = new User({
        name,
        username: name,
        password: 'password'
      });

      newUser.dudify(function (err, name) {
        if (err) throw err;

        console.log('Your new name is ' + name);
      });

      newUser.save(function (err) {
        if (err) throw err;

        User.find({}, function(err, users) {
          reply(users);  
        });

        console.log('User saved successfully!');
      });
    }
  },
  {
    method: 'DELETE',
    path: '/api/users',
    handler: function (request, reply) {
      const { id } = request.payload;

      User.findOneAndRemove({_id: id}, function(err, user) {
        if (err) throw err;

        User.find({}, function(err, users) {
          reply(users);  
        });
      });
    }
  }
];

