import { Injectable } from '@nestjs/common';
import { AppleService } from 'src/apple/apple/apple.service';
import { YellowAppleService } from 'src/apple/yellow-apple/yellow-apple.service';

@Injectable()
export class PeachService {
  constructor(
    private readonly appleService: AppleService,
    private readonly yellowAppleService: YellowAppleService,
  ) {}

  log() {
    console.log('peach');
    this.yellowAppleService.log();
    this.appleService.log();
  }
}
