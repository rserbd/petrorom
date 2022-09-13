import { Test, TestingModule } from '@nestjs/testing';
import { GetProductsController } from './get-products.controller';

describe('GetProductsController', () => {
  let controller: GetProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetProductsController],
    }).compile();

    controller = module.get<GetProductsController>(GetProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
