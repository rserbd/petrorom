import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from '../../../services/products/products.service';
import { Product } from '../../../entities/product.entity';

@Controller('api/create-product')
export class CreateProductController {
    constructor(private productsService: ProductsService) {}

    @Post()
    async postNewProduct(@Body() product: Product): Promise<Product> {
        return await this.productsService.createProduct(product);
    }
}
