const Sequelize = require('sequelize'),
    sequelize = require('./sequelize');

const BaseGet = field => {
    return function() {
        return this.getDataValue(field);
    };
};

const Users = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        get: BaseGet('username')
    },
    email: {
        type: Sequelize.STRING,
        get: BaseGet('email')
    }
});

exports.findAllUser = async () => {
    const users = await Users.findAll({
        'attributes': ['id', 'username']
    });
    const res = [];
    for (let user of users) {
        res.push({
            id: user.id,
            username: user.username
        });
    }
    return res;
};

exports.findUserById = async id => {
    const user = await Users.findById(id, {
        'attributes': ['username', 'email']
    });
    return user && {
        email: user.email,
        username: user.username
    };
};
