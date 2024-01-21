import { Module, Global } from '@nestjs/common';
import { ComicsController } from './app/comics/comics.controller';
import { AppService } from './app.service';
import { StartupModule } from './startup-module/startup.module';
import { ComicsService } from './app/comics/comics.service';
import { AppProvider } from './app.providers';

@Global()
@Module({
    imports: [
      StartupModule
    ],
    controllers: [ComicsController],
    providers: [AppService, ComicsService, ...AppProvider],
    exports: []
})
export class AppModule {}
