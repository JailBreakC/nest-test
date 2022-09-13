import { Test, TestingModule } from '@nestjs/testing';
import { PeachService } from './peach.service';

describe('PeachService', () => {
  let service: PeachService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeachService],
    }).compile();

    service = module.get<PeachService>(PeachService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
