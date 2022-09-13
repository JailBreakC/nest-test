import { Module } from '@nestjs/common';
import { AppleService } from 'src/apple/apple/apple.service';
import { GreenAppleService } from './green-apple/green-apple.service';
import { YellowAppleService } from './yellow-apple/yellow-apple.service';

@Module({
  providers: [GreenAppleService, YellowAppleService, AppleService],
  exports: [AppleService, YellowAppleService],
})
export class AppleModule {}
