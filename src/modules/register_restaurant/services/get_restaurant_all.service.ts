import { Inject, Injectable } from '@nestjs/common';
import { IGetAllRestaurantService } from '../structure/service.structure';
import { RestaurantRepository } from '../repository/restaurant.repositoy';
import { IRestaurantRepository } from '../structure/repository.structure';
import { Restaurant } from '@prisma/client';

@Injectable()
export class Restaurant_getAll implements IGetAllRestaurantService {
  constructor(
    @Inject(RestaurantRepository)
    private readonly restaurantRepository: IRestaurantRepository,
  ) {}
  async execute(): Promise<Restaurant[]> {
    return await this.restaurantRepository.searchAll_restaurant();
  }
}
