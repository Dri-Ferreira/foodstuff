import { Module } from '@nestjs/common';
import { RegisterRestaurantController } from './register_restaurant.controller';
import { Restaurant_register } from './services/restaurant_register.service';
import { RestaurantRepository } from './repository/restaurant.repositoy';

@Module({
  controllers: [RegisterRestaurantController],
  providers: [Restaurant_register, RestaurantRepository],
  exports: [Restaurant_register],
})
export class RegisterRestaurantModule {}
