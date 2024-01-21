import * as Joi from 'joi';

export const configuration = () => ({
    // Define your schema here
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: process.env.DB_PORT,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_SCHEMA: process.env.DB_SCHEMA || 'public',
    DB_MONGO_HISTORICAL_URI: process.env.DB_MONGO_HISTORICAL_URI,
    EVENTSTORE_READINESS_URL: process.env.EVENTSTORE_READINESS_URL,
    DIR_I18N: process.env.DIR_I18N || 'dist/i18n'
});

export const configValidationSchema = Joi.object({
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().required(),
    DB_USER: Joi.string().required(),
    DB_PASSWORD: Joi.string(),
    DB_NAME: Joi.string().required(),
    DB_SCHEMA: Joi.string().default('public'),
    DB_MONGO_HISTORICAL_URI: Joi.string().required(),
    EVENTSTORE_READINESS_URL: Joi.string().required(),
    DIR_I18N: Joi.string().default('dist/i18n')
});
