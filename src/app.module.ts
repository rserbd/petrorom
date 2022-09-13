import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';
import { User } from './entities/user.entity';
import { CreateUserController } from './controllers/users/create-user/create-user.controller';
import { GetUsersController } from './controllers/users/get-users/get-users.controller';
import { GetUserController } from './controllers/users/get-user/get-user.controller';
import { DeleteUserController } from './controllers/users/delete-user/delete-user.controller';
import { UpdateUserController } from './controllers/users/update-user/update-user.controller';
import { UsersService } from './services/users/users.service';
import { OffersService } from './services/offers/offers.service';
import { Offer } from './entities/offer.entity';
import { CreateOfferController } from './controllers/offers/create-offer/create-offer.controller';
import { GetOffersController } from './controllers/offers/get-offers/get-offers.controller';
import { GetOfferController } from './controllers/offers/get-offer/get-offer.controller';
import { UpdateOfferController } from './controllers/offers/update-offer/update-offer.controller';
import { DeleteOfferController } from './controllers/offers/delete-offer/delete-offer.controller';
import { ProductsService } from './services/products/products.service';
import { CreateProductController } from './controllers/products/create-product/create-product.controller';
import { GetProductsController } from './controllers/products/get-products/get-products.controller';
import { GetProductController } from './controllers/products/get-product/get-product.controller';
import { UpdateProductController } from './controllers/products/update-product/update-product.controller';
import { DeleteProductController } from './controllers/products/delete-product/delete-product.controller';
import { Product } from './entities/product.entity';
import { AuthController } from './controllers/auth/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './services/users/constants';
import { JwtStrategy } from './services/users/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './services/users/local.strategy';
import { OffersController } from './controllers/offers/offers.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '8h' },
    }),
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([User, Offer, Product])
  ],
  controllers: [AppController, CreateUserController, GetUsersController, GetUserController, DeleteUserController, UpdateUserController, CreateOfferController, GetOffersController, GetOfferController, UpdateOfferController, DeleteOfferController, CreateProductController, GetProductsController, GetProductController, UpdateProductController, DeleteProductController, AuthController, OffersController],
  providers: [AppService, UsersService, OffersService, ProductsService, LocalStrategy, JwtStrategy],
})
export class AppModule { }
