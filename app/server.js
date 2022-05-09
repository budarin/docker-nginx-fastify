const fastify = require('fastify')({ logger: true });

fastify.route({
    method: 'GET',
    url: '/',
    handler: async () => {
        return 'hello World';
    },
});

fastify.route({
    method: 'GET',
    url: '/method',
    handler: async () => {
        return 'hello from get /method';
    },
});

const start = async () => {
    try {
        await fastify.listen(3000, '0.0.0.0');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
