
const addErrorHandler = app => {

    const errorHandler = (err, req, res, next) => {

        if(res.headersSent) {
            next(err);
        }

        return res.status(500).json({message: err.message });
    };

    app.use(errorHandler);
};

module.exports = addErrorHandler;