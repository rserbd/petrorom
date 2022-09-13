import { Test, TestingModule } from '@nestjs/testing';
import { CreateOfferController } from './create-offer.controller';

describe('CreateOfferController', () => {
  let controller: CreateOfferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateOfferController],
    }).compile();

    controller = module.get<CreateOfferController>(CreateOfferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
