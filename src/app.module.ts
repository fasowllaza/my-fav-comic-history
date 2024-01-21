import { Module, Global } from '@nestjs/common';
import { ComicsController } from './app/comics.controller';
import { AppService } from './app.service';
import { StartupModule } from './startup-module/startup.module';

@Global()
@Module({
    imports: [
      StartupModule
    ],
    controllers: [ComicsController],
    providers: [AppService],
    exports: []
})
export class AppModule {}
