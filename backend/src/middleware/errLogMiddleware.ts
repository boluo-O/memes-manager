import { ErrorRequestHandler } from "express"
import logger from "src/logger"

const errLogMiddleware: ErrorRequestHandler = (err, req, res, next) => {
    logger.error(`${req.method} ${req.path} ${err.stack}`)
    next(err)
}

export default errLogMiddleware
