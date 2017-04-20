const { readSmallFile } = require('lsgo-file'),
    users = require('./router/user');

module.exports = router => {
    router.get('/', ctx => {
        ctx.type = 'text/plain';
        ctx.body = 'hello koa';
    });

    users(router);

    router.get('*', async ctx => {
        ctx.status = 404;
        ctx.body = await readSmallFile(`${__dirname}/404.html`);
    });
};
