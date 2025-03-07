import {config} from "dotenv"

config();

export const PORT = process.env.PORT ?? 3000;
export const DB_NAME = process.env.DB_NAME!
export const DB_USER = process.env.DB_USER!
export const DB_PASS = process.env.DB_PASS!
export const DB_PORT = process.env.DB_PORT!
export const DB_HOST = process.env.DB_HOST!
export const PUBLIC_KEY = process.env.PUBLIC_KEY!
export const BASE_URL_JSONPLACEHOLDER_API = process.env.BASE_URL_JSONPLACEHOLDER_API!

// * ?? Nullish coalsing