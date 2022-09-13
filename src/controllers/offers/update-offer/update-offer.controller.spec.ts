import { Test, TestingModule } from '@nestjs/testing';
import { UpdateOfferController } from './update-offer.controller';

describe('UpdateOfferController', () => {
  let controller: UpdateOfferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateOfferController],
    }).compile();

    controller = module.get<UpdateOfferController>(UpdateOfferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
