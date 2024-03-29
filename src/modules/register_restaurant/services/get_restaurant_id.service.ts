import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { IGetIdRestaurant } from '../structure/service.structure';
import { RestaurantRepository } from '../repository/restaurant.repositoy';
import { IRestaurantRepository } from '../structure/repository.structure';
import { Restaurant } from '@prisma/client';
import { getIdRestaurantParams } from '../types/register_params';

@Injectable()
export class Restaurant_getId implements IGetIdRestaurant {
  constructor(
    @Inject(RestaurantRepository)
    private readonly restaurantRepository: IRestaurantRepository,
  ) {}
  async execute(params: getIdRestaurantParams): Promise<Restaurant> {
    const existRestaurant = await this.restaurantRepository.existRestaurant({
      id: params.id,
    });
    if (!existRestaurant)
      throw new BadRequestException('There is no registered restaurant');
    return await this.restaurantRepository.searchById({ id: params.id });
  }
}
