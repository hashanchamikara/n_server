import winston from 'winston';
import environment from "./environment";
import morgan from "morgan";


const logLevels = {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
};

const logColors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    debug: 'blue',
};

const logger = winston.createLogger({
    levels: logLevels,
    format: winston.format.combine(
        winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        winston.format.printf(({timestamp, level, message}) => `${timestamp} [${level.toUpperCase()}]: ${message}`)
    ),
    transports: [
        new winston.transports.Console({
            level: environment.ENV === 'development' ? 'debug' : 'info',
            format: winston.format.combine(
                winston.format.splat(),
                winston.format.colorize({all: true})
            ),
        }),
        new winston.transports.File({
            filename: 'logs/combined.log',
            format: winston.format.combine(
                winston.format.splat(),
                winston.format.colorize({all: true})
            )
        })
    ],
});

winston.addColors(logColors);

export default logger;

const requestLogger = morgan(':remote-addr :url :method HTTP/:http-version :user-agent',
    {
        immediate: true,
        stream: {
            write: (message) => logger.info(`[REQUEST] ${message.trim()}`)
        }});

const responseLogger = morgan(':remote-addr :url :method :status :res[content-length] :response-time ms',
    {
        stream: {
            write: (message) => logger.info(`[RESPONSE] ${message.trim()}`)
        }});

export {requestLogger, responseLogger};
