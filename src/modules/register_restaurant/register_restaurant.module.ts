import { Module } from '@nestjs/common';
import { RegisterRestaurantController } from './register_restaurant.controller';
import { Restaurant_register } from './services/restaurant_register.service';
import { RestaurantRepository } from './repository/restaurant.repositoy';
import { PrismaService } from 'src/database/clientPrisma';
import { Restaurant_getAll } from './services/get_restaurant_all.service';

@Module({
  controllers: [RegisterRestaurantController],
  providers: [
    Restaurant_register,
    Restaurant_getAll,
    RestaurantRepository,
    PrismaService,
  ],
  exports: [Restaurant_register],
})
export class RegisterRestaurantModule {}
