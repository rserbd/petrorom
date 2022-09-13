import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from '../../../services/products/products.service';
import { Product } from '../../../entities/product.entity';

@Controller('api/get-products')
export class GetProductsController {
    constructor(private productsService: ProductsService) {}

    @Get()
    async getProducts(): Promise<Product[]> {
        return await this.productsService.getAll();
    }
}