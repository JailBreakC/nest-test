import { Test, TestingModule } from '@nestjs/testing';
import { GreenAppleService } from './green-apple.service';

describe('GreenAppleService', () => {
  let service: GreenAppleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GreenAppleService],
    }).compile();

    service = module.get<GreenAppleService>(GreenAppleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
