import { Injectable } from '@nestjs/common';

@Injectable()
export class YellowAppleService {
  log() {
    console.log('YellowAppleService');
  }
}
