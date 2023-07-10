import winston from "winston";

const callAsync = async () => {
  return Promise.reject('ups, something wrong');
}

const logger = winston.createLogger({
  level: "info",
  // handleExceptions: true,
  // handleRejection: true, -> bisa ditambahkan disini
  transports: [
    new winston.transports.Console({}),
    new winston.transports.File({
      handleExceptions: true,
      handleRejection: true,
      filename: "exception.log",
    })
  ]
});

callAsync();