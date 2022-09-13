import { Controller, Delete, Param } from '@nestjs/common';
import { ProductsService } from '../../../services/products/products.service';
import { Product } from '../../../entities/product.entity';

@Controller('api/delete-product')
export class DeleteProductController {
    constructor(private productsService: ProductsService) {}

    @Delete(':id')
    async deleteProductById(@Param() id: number): Promise<Product> {
        return await this.productsService.deleteProduct(id);
    }
}