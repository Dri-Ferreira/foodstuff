import { Body, Controller, Get, Inject, Post, Param } from '@nestjs/common';
import { Restaurant_register } from './services/restaurant_register.service';
import { RegisterRestaurantDto } from './Dto/register.dto';
import { Restaurant_getAll } from './services/get_restaurant_all.service';
import { Restaurant } from '@prisma/client';
import { Restaurant_getId } from './services/get_restaurant_id.service';
import { getIdRestaurantParams } from './types/register_params';

@Controller('register-restaurant')
export class RegisterRestaurantController {
  constructor(
    @Inject(Restaurant_register)
    private readonly restaurant_register: Restaurant_register,
    @Inject(Restaurant_getAll)
    private readonly restaurant_getAll: Restaurant_getAll,
    @Inject(Restaurant_getId)
    private readonly restaurant_getId: Restaurant_getId,
  ) {}

  @Post('create')
  register(@Body() registerRestaurant: RegisterRestaurantDto) {
    return this.restaurant_register.execute(registerRestaurant);
  }

  @Get('searchAll')
  searchAll_restaurant(): Promise<Restaurant[]> {
    return this.restaurant_getAll.execute();
  }

  @Get('searchId/:id')
  searchId(@Param() id: getIdRestaurantParams): Promise<Restaurant> {
    return this.restaurant_getId.execute(id);
  }
}
