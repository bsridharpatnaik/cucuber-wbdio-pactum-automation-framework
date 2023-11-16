const winston = require('winston');
const fs = require('fs-extra')
const logFilePath = 'logs/automation.log';

function clearLogFile() {
    try {
      fs.unlinkSync(logFilePath);
      console.log(`Log file ${logFilePath} cleared.`);
    } catch (err) {
      console.error(`Error clearing log file: ${err.message}`);
    }
  }

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: logFilePath }),
  ],
});

module.exports = {
  logger,
  clearLogFile,
};
