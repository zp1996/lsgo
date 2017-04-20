const { getErrorMsg } = require('./error');

const verify = {
    email: {
        pattern: /^(?:\w+[\-+.]+)*[a-z0-9]+@(?:\w+.)+([a-z]{2,})+$/i,
        errorMsg: getErrorMsg('邮箱格式错误')
    },
    username: {
        pattern: /^\S+$/,
        errorMsg: getErrorMsg('用户名格式错误')
    }
};

module.exports = data => {
    const keys = Object.keys(data);
    let err = null;
    keys.every(key => {
        const flag = verify[key].pattern.test(data[key]);
        if (flag) {
            return flag;
        } else {
            err = verify[key].errorMsg;
        }
    });
    return err;
};
