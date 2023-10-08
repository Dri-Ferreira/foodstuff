import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Param,
  Patch,
} from '@nestjs/common';
import { Restaurant_register } from './services/restaurant_register.service';
import { RegisterRestaurantDto } from './Dto/register.dto';
import { Restaurant_getAll } from './services/get_restaurant_all.service';
import { Restaurant } from '@prisma/client';
import { Restaurant_getId } from './services/get_restaurant_id.service';
import { getIdRestaurantParams } from './types/register_params';
import { Update_restaurant } from './services/update_restaurant.service';
import { UpdateRestauratDto } from './Dto/update-restaurat.dto';

@Controller('register-restaurant')
export class RegisterRestaurantController {
  constructor(
    @Inject(Restaurant_register)
    private readonly restaurant_register: Restaurant_register,
    @Inject(Restaurant_getAll)
    private readonly restaurant_getAll: Restaurant_getAll,
    @Inject(Restaurant_getId)
    private readonly restaurant_getId: Restaurant_getId,
    @Inject(Update_restaurant)
    private readonly restauran_update: Update_restaurant,
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

  @Patch('updateRestaurant/:id')
  updateRestaurant(
    @Param('id') id: string,
    @Body() updateRestaurant: UpdateRestauratDto,
  ): Promise<Restaurant> {
    return this.restauran_update.updateRestaurant(id, updateRestaurant);
  }
}
