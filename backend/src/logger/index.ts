// https://github.com/noobruz/node-express-typescript-oop/blob/main/src/utils/logger.ts

import winston from "winston"

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
}

const level = () => {
    const env = process.env.NODE_ENV || "development"
    const isDevelopment = env === "development"
    return isDevelopment ? "debug" : "warn"
}

const colors = {
    error: "red",
    warn: "yellow",
    info: "green",
    http: "magenta",
    debug: "white",
}

winston.addColors(colors)

const format = winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
    winston.format.colorize({ all: true }),
    winston.format.printf(
        (info) => `${info.timestamp} [${info.level}]: ${info.message}`
    )
)

const custformat = winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
    winston.format.printf(
        (info) => `${info.timestamp} [${info.level}]: ${info.message}`
    )
)

const transports = [
    new winston.transports.Console({
        format,
    }),
    new winston.transports.File({
        dirname: "log",
        filename: "error.log",
        level: "error",
        format: custformat,
    }),

    new winston.transports.File({
        dirname: "log",
        format: custformat,
        filename: "all.log",
    }),
]

const logger = winston.createLogger({
    level: level(),
    levels,
    transports,
})

const stream = {
    write: (message: string) => {
        logger.info(message.substring(0, message.lastIndexOf("\n")))
    },
}

export { logger, stream }
