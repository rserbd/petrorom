import { Test, TestingModule } from '@nestjs/testing';
import { GetOffersController } from './get-offers.controller';

describe('GetOffersController', () => {
  let controller: GetOffersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetOffersController],
    }).compile();

    controller = module.get<GetOffersController>(GetOffersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
