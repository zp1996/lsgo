const { findAllUser, findUserById, addUser } = require('../models/users.js'),
    verify = require('../helpers/verify.js');

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
    router.post('/user/add', async ctx => {
        const { username, email } = ctx.request.body;
        ctx.set('Access-Control-Allow-Origin', '*');
        const verifyErr = verify({ username, email });
        if (verifyErr != null) {
            return ResponseJSON(ctx, verifyErr);
        }
        const err = await addUser(username, email);
        if (err == null) {
            return ResponseJSON(ctx, { status: 200 });
        }
        ResponseJSON(ctx, err);
    });
};
