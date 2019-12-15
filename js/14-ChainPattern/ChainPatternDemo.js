"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 日志的等级 */
var LoggerLevel;
(function (LoggerLevel) {
    LoggerLevel[LoggerLevel["INFO"] = 1] = "INFO";
    LoggerLevel[LoggerLevel["DEBUG"] = 2] = "DEBUG";
    LoggerLevel[LoggerLevel["ERROR"] = 3] = "ERROR";
})(LoggerLevel || (LoggerLevel = {}));
/** 创建抽象的记录器类 */
class AbstractLogger {
    setNextLogger(nextLogger) {
        this.nextLogger = nextLogger;
    }
    logMsg(level, msg) {
        if (this.level <= level) {
            this.writeMsg(msg);
        }
        if (this.nextLogger) {
            this.nextLogger.logMsg(level, msg);
        }
    }
}
class InfoLogger extends AbstractLogger {
    constructor(level) {
        super();
        this.level = level;
    }
    writeMsg(msg) {
        console.log('Info::logger: ' + msg);
    }
}
class DebugLogger extends AbstractLogger {
    constructor(level) {
        super();
        this.level = level;
    }
    writeMsg(msg) {
        console.log('Debug::logger: ' + msg);
    }
}
class ErrorLogger extends AbstractLogger {
    constructor(level) {
        super();
        this.level = level;
    }
    writeMsg(msg) {
        console.log('Error::logger: ' + msg);
    }
}
class ChainPatternDemo {
    constructor() {
        const chainOfLogger = this.getChainOfLogger();
        chainOfLogger.logMsg(LoggerLevel.INFO, 'info msg');
        chainOfLogger.logMsg(LoggerLevel.DEBUG, 'debug msg');
        chainOfLogger.logMsg(LoggerLevel.ERROR, 'error info');
    }
    getChainOfLogger() {
        const errorLogger = new ErrorLogger(LoggerLevel.ERROR);
        const debugLogger = new DebugLogger(LoggerLevel.DEBUG);
        const infoLogger = new InfoLogger(LoggerLevel.INFO);
        errorLogger.setNextLogger(debugLogger);
        debugLogger.setNextLogger(infoLogger);
        return errorLogger;
    }
}
exports.default = ChainPatternDemo;
//# sourceMappingURL=ChainPatternDemo.js.map