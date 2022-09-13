import { Injectable } from '@nestjs/common';
import { GreenAppleService } from '../green-apple/green-apple.service';
import { YellowAppleService } from '../yellow-apple/yellow-apple.service';

@Injectable()
export class AppleService {
  constructor(
    private readonly greenAppleService: GreenAppleService,
    private readonly yellowAppleService: YellowAppleService,
  ) {}

  log() {
    this.greenAppleService.log();
    this.yellowAppleService.log();
  }
}
