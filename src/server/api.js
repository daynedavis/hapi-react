'use strict';

module.exports = [{
  method: 'GET',
  path: '/api/hello',
  handler: function (request, reply) {
    let response = '';
    ['hello', 'world'].map((item) => {
      response = `${response} :) ${item}`;
    });
    reply(response);
  }
}
];
