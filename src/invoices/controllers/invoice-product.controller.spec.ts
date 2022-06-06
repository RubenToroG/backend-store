import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceProductController } from './invoice-product.controller';

describe('InvoiceProductController', () => {
  let controller: InvoiceProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvoiceProductController],
    }).compile();

    controller = module.get<InvoiceProductController>(InvoiceProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
