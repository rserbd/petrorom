import { Test, TestingModule } from '@nestjs/testing';
import { GetUsersController } from './get-users.controller';

describe('GetUsersController', () => {
  let controller: GetUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetUsersController],
    }).compile();

    controller = module.get<GetUsersController>(GetUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
