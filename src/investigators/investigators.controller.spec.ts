import { Test, TestingModule } from '@nestjs/testing';
import { InvestigatorsController } from './investigators.controller';

describe('InvestigatorsController', () => {
  let controller: InvestigatorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvestigatorsController],
    }).compile();

    controller = module.get<InvestigatorsController>(InvestigatorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
