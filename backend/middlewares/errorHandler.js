const errorHandler = ( err, req, res, next ) => {
 const statusCode = res.statusCode ? res.statusCode : 500;

 switch (statusCode) {
    case 400:
        res.json({
            title: "VALIDATION_ERROR",
            message: err.message,
            stackTrace: err.stack,
        })
        break;
    case 401:
        res.json({
            title: "UN_AUTHORIZED",
            message: err.message,
            stackTrace: err.stack,
        })
        break;
    case 403:
        res.json({
            title: "FORBIDDEN",
            message: err.message,
            stackTrace: err.stack,
        })
        break;
    case 404:
        res.json({
            title: "NOT_FOUND",
            message: err.message,
            stackTrace: err.stack,
        })
        break;
    case 500:
        res.json({
            title: "SERVER_ERROR",
            message: err.message,
            stackTrace: err.stack,
        })
        break;

    default:
        console.log("All good, No error!! :) ")
        break;
        
 }
}

module.exports = errorHandler