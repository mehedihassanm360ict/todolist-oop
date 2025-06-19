import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.resolve(__dirname, '../../../.env')})

interface ENV {
    PORT: number | undefined;
    DB_NAME: string | undefined;
    DB_PASS: string | undefined;
    DB_USER: string | undefined;
    DB_PORT:string | undefined;
    DB_HOST:string | undefined;
}

interface Config {
    PORT: number;
    DB_NAME: string;
    DB_PASS: string;
    DB_USER: string;
    DB_PORT: string;
    DB_HOST: string;
}

const getConfig = ():ENV => {
    return {
        PORT: process.env.PORT ? Number(process.env.PORT) : 5008,
        DB_NAME: process.env.DB_NAME,
        DB_USER: process.env.DB_USER,
        DB_PASS: process.env.DB_PASS,
        DB_HOST: process.env.DB_HOST,
        DB_PORT: process.env.DB_PORT,
    }
}

const getSanitizedConfig = (config:ENV):Config => {
    for(const [key, value] of Object.entries(config)){
        if(value == undefined){
            throw new Error(`Configuration error: Required environment variable '${key}' is missing or empty. Please check your .env file.`);
        }
    }

    return config as Config;
}

export default getSanitizedConfig(getConfig());