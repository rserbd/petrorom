import { Test, TestingModule } from '@nestjs/testing';
import { GetOfferController } from './get-offer.controller';

describe('GetOfferController', () => {
  let controller: GetOfferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetOfferController],
    }).compile();

    controller = module.get<GetOfferController>(GetOfferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
