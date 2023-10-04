class ClientError extends Error{
    constructor(message, statusCode = 401 ){
        super(message);
        this.statusCode = statusCode
    }
}

module.exports = { ClientError }