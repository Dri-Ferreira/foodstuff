import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { Restaurant_register } from './services/restaurant_register.service';
import { RegisterRestaurantDto } from './Dto/register.dto';
import { Restaurant_getAll } from './services/get_restaurant_all.service';
import { Restaurant } from '@prisma/client';

@Controller('register-restaurant')
export class RegisterRestaurantController {
  constructor(
    @Inject(Restaurant_register)
    private readonly restaurant_register: Restaurant_register,
    @Inject(Restaurant_getAll)
    private readonly restaurant_getAll: Restaurant_getAll,
  ) {}

  @Post('create')
  register(@Body() registerRestaurant: RegisterRestaurantDto) {
    return this.restaurant_register.execute(registerRestaurant);
  }

  @Get('searchAll')
  searchAll_restaurant(): Promise<Restaurant[]> {
    return this.restaurant_getAll.execute();
  }
}
