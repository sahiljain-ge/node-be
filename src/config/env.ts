import dotenv from 'dotenv';
dotenv.config({quiet: true});

export const {
  PORT,
  DATABASE_URI
} = process.env;