const Hapi = require('hapi');
const Inert = require('inert');

const server = new Hapi.Server();
server.connection({ port: 3000 });
server.register(Inert, () => {});

if (process.env.NODE_ENV === 'production') {
  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: function (request, reply) {
      reply.file('./dist/index.html');
    }
  });
}

server.route({
  method: 'GET',
  path: '/api/hello',
  handler: function (request, reply) {
    reply('Hello, world!');
  }
});

server.start((err) => {

  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
