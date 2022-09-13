import { Test, TestingModule } from '@nestjs/testing';
import { YellowAppleService } from './yellow-apple.service';

describe('YellowAppleService', () => {
  let service: YellowAppleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YellowAppleService],
    }).compile();

    service = module.get<YellowAppleService>(YellowAppleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
