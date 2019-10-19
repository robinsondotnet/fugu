const path = require('path');

const base = path.resolve(__dirname, '../');

const config = {
    development: {
        dialect: 'sqlite',
        storage: path.resolve(base, 'dev.sqlite3'),
    },
    test: {
        dialect: 'sqlite',
        storage: path.resolve(base, 'test.sqlite3'),
        logging: false,
    },
    production: {
        dialect: 'sqlite',
        storage: path.resolve(base, 'prod.sqlite3'),
        logging: false,
    },
};

module.exports = config;
