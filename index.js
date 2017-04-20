const Koa = require('koa'),
    KoaRouter = require('koa-router'),
    bodyParser = require('koa-bodyparser'),
    router = new KoaRouter(),
    routes = require('./routes'),
    app = new Koa(),
    port = 3000;

require('./models/sequelize');

app.use(bodyParser());

routes(router);
app.use(router['routes']());

app.listen(port, () => {
    console.log(`server is on http://${require('./ip')}:${port}/`);
});
