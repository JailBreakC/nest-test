import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeachModule } from './peach/peach.module';
import { PeachService } from './peach/peach/peach.service';

@Module({
  imports: [PeachModule],
  controllers: [AppController],
  providers: [AppService, PeachService],
})
export class AppModule {}
