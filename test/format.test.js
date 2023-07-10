import winston from "winston";
// Format adalah object yang digunakan untuk melakukan formatting data log sebelum dikirim ke Transport
// Saat kita membuat Logger, secara default, Logger akan akan menggunakan JSON Format, artinya data akan dikirim dalam bentuk JSON
// Winston juga menyediakan banyak format lain selain JSON

test.skip("logging with format", () => {
  const logger = winston.createLogger({
    level: "info",
    // secara default winston.format.json()
    // format: winston.format.simple(),
    format: winston.format.logstash(),
    transports: [
      new winston.transports.Console({})
    ]
  });

  logger.info("hello syibran")
})

test.skip("logging with custome format", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.printf(info => {
      return `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`;
    }),
    transports: [
      new winston.transports.Console({})
    ]
  });

  logger.info("hello syibran")
})

// combine format
// winston memiliki fitur bernama combine format, dimana kita dapat melakukan kombinasi beberapa format sekaligus
// ini cocok unutk menambahkan informasi tambahan ke log data, misal data timestamp, data jarak waktu antar log, dan lain2
// kita bisa menggunakan cimbine format di winston unutk menggabungkan beberapa format
test("logging with combine format", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json()
    ),
    transports: [
      new winston.transports.Console({})
    ]
  });

  logger.error("hello syibran")
  logger.warn("hello syibran")
  logger.info("hello syibran")
})