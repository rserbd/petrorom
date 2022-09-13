import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from '../../../services/products/products.service';
import { Product } from '../../../entities/product.entity';

@Controller('api/get-product')
export class GetProductController {
    constructor(private productsService: ProductsService) {}

    @Get(':id')
    async getProductById(@Param() id: number): Promise<Product> {
        return await this.productsService.getOneById(id);
    }
}