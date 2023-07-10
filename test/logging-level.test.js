import winston from "winston";
// Dalam logging, terdapat istilah yang bernama Level, Level biasanya digunakan sebagai informasi seberapa penting log tersebut
// Level dimulai dari paling rendah ke paling tinggi, semakin tinggi Level nya, artinya semakin penting informasi log tersebut
// error - warn - info - http - verbose - debug - silly  (tinggi - rendah)
// Untuk menambahkan Level ketika melakukan log, kita bisa ubah attribute level menjadi level yang kita inginkan


// Secara default, saat kita membuat Logger,  Logger hanya akan menampilkan log dengan level info atau level diatasnya
// Jika kita ingin mengubah log level mana yang ingin kita tampilkan, maka kita perlu ubah konfigurasi level ketika kita membuat logger, dengan menggunakan level minimal yang ingin kita tampilkan
// cara untuk mengatur agar level yang lebih rendah tetap muncul, maka bisa menambahkan configurasi kedalam loggernya
const logger = winston.createLogger({
  level: "debug", // akan memunculkan log untuk level debug dan lavel yg berada diatasnya
  transports: [
    new winston.transports.Console({})
  ]
});
test("logger level", () => {
  logger.log({ level: "error", message: "error message" })
  logger.log({ level: "warn", message: "warn message" })
  logger.log({ level: "info", message: "info message" })
  logger.log({ level: "http", message: "http message" })
  logger.log({ level: "verbose", message: "verbose message" })
  logger.log({ level: "debug", message: "debug message" })
  logger.log({ level: "silly", message: "silly message" })
})

test("logger level using shortcut function", () => {
  logger.error('error message');
  logger.warn('warn message');
  logger.info('info message');
  logger.http('http message');
  logger.verbose('verbose message');
  logger.debug('debug message');
  logger.silly('silly message');
})