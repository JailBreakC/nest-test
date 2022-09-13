import { Injectable } from '@nestjs/common';

@Injectable()
export class GreenAppleService {
  log() {
    console.log('GreenAppleService');
  }
}
