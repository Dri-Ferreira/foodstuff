import { Body, Controller, Inject, Post } from '@nestjs/common';
import { Restaurant_register } from './services/restaurant_register.service';
import { RegisterRestaurantDto } from './Dto/register.dto';

@Controller('register-restaurant')
export class RegisterRestaurantController {
  constructor(
    @Inject(Restaurant_register)
    private readonly restaurant_register: Restaurant_register,
  ) {}

  @Post('create')
  register(@Body() registerRestaurant: RegisterRestaurantDto) {
    return this.restaurant_register.execute(registerRestaurant);
  }
}
