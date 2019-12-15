/** 日志的等级 */
enum LoggerLevel {
    INFO = 1,
    DEBUG = 2,
    ERROR = 3
}
/** 创建抽象的记录器类 */
abstract class AbstractLogger{
    protected level:LoggerLevel;
    /** 下一个接收者 */
    protected nextLogger:AbstractLogger;

    setNextLogger(nextLogger:AbstractLogger){
        this.nextLogger = nextLogger;
    }

    logMsg(level:LoggerLevel, msg:string){
        if (this.level <= level) {
            this.writeMsg(msg);
        }
        if (this.nextLogger) {
            this.nextLogger.logMsg(level, msg);
        }
    }

    abstract writeMsg(msg:string);
    
} 

class InfoLogger extends AbstractLogger{
    constructor(level:LoggerLevel){
        super();
        this.level = level;
    }

    writeMsg(msg:string){
        console.log('Info::logger: ' + msg);
    }
}

class DebugLogger extends AbstractLogger{
    constructor(level:LoggerLevel){
        super();
        this.level = level;
    }

    writeMsg(msg:string){
        console.log('Debug::logger: ' + msg);
    }
}

class ErrorLogger extends AbstractLogger{
    constructor(level:LoggerLevel){
        super();
        this.level = level;
    }

    writeMsg(msg:string){
        console.log('Error::logger: ' + msg);
    }
}

export default class ChainPatternDemo{
    constructor(){
        const chainOfLogger = this.getChainOfLogger();
        chainOfLogger.logMsg(LoggerLevel.INFO, 'info msg');
        chainOfLogger.logMsg(LoggerLevel.DEBUG, 'debug msg');
        chainOfLogger.logMsg(LoggerLevel.ERROR, 'error info');
    }

    getChainOfLogger(){
        const errorLogger = new ErrorLogger(LoggerLevel.ERROR);
        const debugLogger = new DebugLogger(LoggerLevel.DEBUG);
        const infoLogger = new InfoLogger(LoggerLevel.INFO);
        errorLogger.setNextLogger(debugLogger);
        debugLogger.setNextLogger(infoLogger);
        return errorLogger;
    }
}

