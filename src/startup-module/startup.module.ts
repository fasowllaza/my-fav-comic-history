import { Module, Global, Logger, MiddlewareConsumer } from '@nestjs/common';
import { Comic } from 'src/entities/comics.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { SequelizeModule } from '@nestjs/sequelize';
import { configValidationSchema, configuration } from './config';
import { RequestContextModule } from 'nestjs-request-context';

const models = [
    Comic
]

@Global()
@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            isGlobal: true,
            validationSchema: configValidationSchema
        }),
        TerminusModule,
        SequelizeModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (cs: ConfigService) => ({
                dialect: 'postgres',
                host: cs.getOrThrow<string>('DB_HOST'),
                port: cs.getOrThrow<number>('DB_PORT'),
                username: cs.getOrThrow<string>('DB_USER'),
                password: cs.get<string>('DB_PASSWORD'),
                database: cs.getOrThrow<string>('DB_NAME'),
                models: models,
                define: {
                    timestamps: false,
                    underscored: true,
                },
                logging: (sql) => {
                    Logger.debug(`${sql}`);
                },
            })
        }),
        SequelizeModule.forFeature(models),
        RequestContextModule
    ]
})

export class StartupModule {}
