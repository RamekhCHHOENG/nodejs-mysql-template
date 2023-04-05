import { ConnectionOptions } from "typeorm";
import dotenv from 'dotenv';
dotenv.config();

export const typeOrmConfig: ConnectionOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USER,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: ['entities/*.entity.ts'],
};
