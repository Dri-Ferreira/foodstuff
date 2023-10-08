import { Inject, Injectable } from '@nestjs/common';
import { IUpdateRestaurant } from '../structure/service.structure';
import { IRestaurantRepository } from '../structure/repository.structure';
import { RestaurantRepository } from '../repository/restaurant.repositoy';
import { Restaurant } from '@prisma/client';
import { UpdateRestauratDto } from '../Dto/update-restaurat.dto';

@Injectable()
export class Update_restaurant implements IUpdateRestaurant {
  constructor(
    @Inject(RestaurantRepository)
    private readonly restaurantRepository: IRestaurantRepository,
  ) {}
  async updateRestaurant(
    id: string,
    updateRestarantDto: UpdateRestauratDto,
  ): Promise<Restaurant> {
    const restaurant = await this.restaurantRepository.updateRestaurant(
      id,
      updateRestarantDto,
    );
    return restaurant;
  }
}
