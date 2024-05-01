import { Module, Global } from '@nestjs/common';
import { ComicsController } from './app/comics/comics.controller';
import { AppService } from './app.service';
import { StartupModule } from './startup-module/startup.module';
import { ComicsService } from './app/comics/comics.service';
import { AppProvider } from './app.providers';
import { TagsService } from './app/tags/tags.service';
import { TagsController } from './app/tags/tags.controller';

@Global()
@Module({
  imports: [StartupModule],
  controllers: [ComicsController, TagsController],
  providers: [AppService, ComicsService, TagsService, ...AppProvider],
  exports: [],
})
export class AppModule {}
