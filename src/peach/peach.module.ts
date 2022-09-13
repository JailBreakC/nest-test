import { Module } from '@nestjs/common';
import { AppleModule } from 'src/apple/apple.module';
import { PeachService } from './peach/peach.service';

@Module({
  imports: [AppleModule],
  providers: [PeachService],
  exports: [PeachService, AppleModule],
})
export class PeachModule {}
