import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../../entities/product.entity';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product) private productsRepository: Repository<Product>) {
    }

    // Get all products

    getAll(): Promise<Product[]> {
        return this.productsRepository.find(); // SELECT * from user
    }

    // Get offer by id

    async getOneById(id: number): Promise<Product> {
        try {
            const product = await this.productsRepository.findOneOrFail({
                where: {
                    id: id
                }
            });
            return product;
        } catch (err) {
            throw err;
        }
    }

    // Create new product

    async createProduct(product: Product): Promise<Product> {
        const newProduct = this.productsRepository.create(product);

        return this.productsRepository.save(newProduct); // INSERT
    }

     // Update existing product by id

     async updateProduct(id: number, updatedProduct: Product): Promise<Product> {
        const product = await this.getOneById(id);
        Object.assign(product, updatedProduct);

        return this.productsRepository.save(product);
    }

    // Delete existing product by id

    async deleteProduct(id: number): Promise<Product> {
        const product = await this.getOneById(id);

        return this.productsRepository.remove(product);
    }
}
