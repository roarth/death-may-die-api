import { Test, TestingModule } from '@nestjs/testing';
import { EldersService } from './elders.service';

describe('EldersService', () => {
  let service: EldersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EldersService],
    }).compile();

    service = module.get<EldersService>(EldersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
