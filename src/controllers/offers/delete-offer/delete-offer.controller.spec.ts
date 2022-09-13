import { Test, TestingModule } from '@nestjs/testing';
import { DeleteOfferController } from './delete-offer.controller';

describe('DeleteOfferController', () => {
  let controller: DeleteOfferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteOfferController],
    }).compile();

    controller = module.get<DeleteOfferController>(DeleteOfferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
