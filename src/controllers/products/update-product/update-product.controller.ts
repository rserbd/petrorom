import { Body, Controller, Param, Put } from '@nestjs/common';
import { ProductsService } from '../../../services/products/products.service';
import { Product } from '../../../entities/product.entity';

@Controller('api/update-product')
export class UpdateProductController {
    constructor(private productsService: ProductsService) {}

    @Put(':id')
    async updateProductById(@Param() id: number, @Body() product: Product): Promise<Product> {
        return await this.productsService.updateProduct(id, product);
    }
}