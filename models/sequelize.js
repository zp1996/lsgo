const Sequelize = require('sequelize');

const getSequelize = () =>
    new Sequelize('db', 'root', '123456', {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 10,
            min: 0,
            idle: 20000
        }
    });

module.exports = getSequelize();
