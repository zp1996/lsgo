const os = require('os');

const getIp = () => {
    const network = os.networkInterfaces();
    let ip = null;
    network['en0'].some(val => {
        const flag = val.family === 'IPv4';
        flag && (ip = val.address);
        return flag;
    });
    return ip;
};

module.exports = getIp();
