// import { Pool } from 'pg';
// import dotenv from 'dotenv';

// dotenv.config();

// const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
// });

// export default pool;

import "reflect-metadata";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { User } from "../models/user.ts";

dotenv.config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

if (!DB_HOST || !DB_USER || !DB_PASSWORD || !DB_NAME) {
  throw new Error("Missing required PostgreSQL environment variables in .env");
}


export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT ? parseInt(DB_PORT, 10) : 5432,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: false,
  namingStrategy: new SnakeNamingStrategy(),
  entities: [User],
  // Optional: configure pool size (TypeORM defaults to 10 connections)
  extra: {
    max: 20,
  },
});
