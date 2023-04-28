import { Inject, Injectable } from '@nestjs/common';
import { ICreateRestaurantService } from '../structure/service.structure';
import { RestaurantRepository } from '../repository/restaurant.repositoy';
import { IRestaurantRepository } from '../structure/repository.structure';

@Injectable()
export class Restaurant_register implements ICreateRestaurantService {
  constructor(
    @Inject(RestaurantRepository)
    private readonly restaurantRepository: IRestaurantRepository,
  ) {}
  execute(params: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
