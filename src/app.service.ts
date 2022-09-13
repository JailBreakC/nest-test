import { Injectable } from '@nestjs/common';
import { AppleService } from './apple/apple/apple.service';
import { PeachService } from './peach/peach/peach.service';

@Injectable()
export class AppService {
  constructor(
    private readonly peachService: PeachService,
    private readonly appleService: AppleService,
  ) {}

  getHello(): string {
    this.peachService.log();
    this.appleService.log();
    return 'Hello World!';
  }
}
