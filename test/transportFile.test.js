import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import TelegramLogger from 'winston-telegram';
import dotenv from "dotenv";
import path from "path";
import { env } from "process";

const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

test("logging transport file", () => {
  const logger = winston.createLogger({
    // transport akan menggunakan level ini sebagai level defaultnya
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "application.log",
        // jika diteteapkan didalam kofigurasi transportnya maka ia akan merujuk ke level ini
        level: 'warn'
      })
    ]
  });

  logger.error("hello syibran")
  logger.warn("hello syibran")
  logger.info("hello syibran")
})

// rotate file
// Secara default, winston Transport File hanya akan menyimpan semua log di dalam satu file
// Hal ini akan sangat berbahaya ketika aplikasi berjalan dalam jangka waktu lama, sehingga menyebabkan ukuran file akan semakin membesar
test("logging transport file with daily rotate", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new winston.transports.DailyRotateFile({
        filename: 'application-%DATE%.log',
        zippedArchive: true,
        maxSize: '1m',
        maxFiles: '14d'
      })
    ]
  });

  // for (let i = 0; i < 100000; i++) {
  //   logger.info(`hello world ${i}`);
  // }
  logger.info(`hello world bran`);
})
test("logging transport file with daily rotate", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new TelegramLogger({
        name: 'warn-channel',
        token: process.env.BOT_ID,
        chatId: process.env.CHAT_ID,
        level: 'warn',
        unique: true,
        formatMessage: function (options) {
          let message = options.message
          if (options.level === 'warn') {
            message = `[Warning] : something wrong in your website with message ${message}`
          }
          return message
        }
      })
    ]
  });
  logger.error(`hello world syibran`);
  logger.error(`hello world malawi`);
  logger.warn(`hello world syibran`);
  logger.warn(`hello world malawi`);
})

hello();