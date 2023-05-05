import { Inject, Injectable } from '@nestjs/common';
import { ICreateRestaurantService } from '../structure/service.structure';
import { RestaurantRepository } from '../repository/restaurant.repositoy';
import { IRestaurantRepository } from '../structure/repository.structure';
import { createRestaurantParams } from '../types/register_params';

@Injectable()
export class Restaurant_register implements ICreateRestaurantService {
  constructor(
    @Inject(RestaurantRepository)
    private readonly restaurantRepository: IRestaurantRepository,
  ) {}
  async execute(params: createRestaurantParams): Promise<any> {
    const new_restaurant = await this.restaurantRepository.register(params);
    return new_restaurant;
  }
}
