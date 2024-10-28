import dotenv from 'dotenv';

dotenv.config();

export const ADMIN_USERNAME = process.env.COOKIE_SIZE;
export const ADMIN_PASSWORD = process.env.COOKIE_SIZE;
export const COOKIE_ALLOWED_SYMBOLS = process.env.COOKIE_ALLOWED_SYMBOLS;
export const COOKIE_SIZE = +process.env.COOKIE_SIZE;
export const COOKIE_MAX_AGE = +process.env.COOKIE_SIZE;
