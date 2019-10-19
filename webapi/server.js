const app = require('./app');
const { host, port } = require('./config');

const server = app.listen(port, host, err => {

    if (err) {
        console.log(err);
    }

    console.log("server is running");

});

module.exports = server;