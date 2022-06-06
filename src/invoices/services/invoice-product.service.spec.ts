import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceProductService } from './invoice-product.service';

describe('InvoiceProductService', () => {
  let service: InvoiceProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvoiceProductService],
    }).compile();

    service = module.get<InvoiceProductService>(InvoiceProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
