const { findAllUser, findUserById } = require('../models/users.js');

const ResponseJSON = (ctx, data) => {
    ctx.type = 'application/json';
    ctx.body = { data };
};

module.exports = router => {
    router.get('/users', async ctx => {
        ResponseJSON(ctx, await findAllUser());
    });
    router.get('/user/:id', async ctx => {
        const { id } = ctx.params;
        const data = await findUserById(id);
        if (data) {
            ResponseJSON(ctx, data);
        } else {
            ctx.redirect('/404');
        }
    });
};
