import * as dotenv from 'dotenv';
dotenv.config();

// env and port
export const nodeEnv: string = process.env.NODE_ENV;
export const port: number = +process.env.PORT || +process.env.CUSTOM_PORT;

// typeorm postgresql
export const tpType: string = process.env.TYPEORM_TYPE;
export const tpPort: number = +process.env.TYPEORM_PORT;
export const tpUsername: string = process.env.TYPEORM_USERNAME;
export const tpPassword: string = process.env.TYPEORM_PASSWORD;
export const tpDatabase: string = process.env.TYPEORM_DATABASE;
export const tpUrl: string = process.env.TYPEORM_URL;
