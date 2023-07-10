import winston from 'winston';

// test("create new logger", () => {
//   const logger = winston.createLogger({});

//   logger.log({
//     level: "info",
//     message: "hello logger"
//   })
// })



// CONSOLE TRANSPORT
// Saat membuat Logger, secara default Logger tidak akan menggunakan Transport
// Apa itu Transport? Transport adalah destinasi atau target yang digunakan untuk mengirim log. 
// Ada banyak sekali Transport, salah satunya yang paling sederhana adalah Console
// Console merupakan Transport yang digunakan untuk mengirim data log ke console/stdout

test("create new logger with console transport", () => {
  const logger = winston.createLogger({
    transports: [
      new winston.transports.Console({})
    ]
  });

  logger.log({
    level: "info",
    message: "hello logger"
  })
})