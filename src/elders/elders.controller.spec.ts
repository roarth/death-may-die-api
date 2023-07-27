import { Test, TestingModule } from '@nestjs/testing';
import { EldersController } from './elders.controller';

describe('EldersController', () => {
  let controller: EldersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EldersController],
    }).compile();

    controller = module.get<EldersController>(EldersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
