import { Injectable } from '@nestjs/common';
import { IRestaurantRepository } from '../structure/repository.structure';

@Injectable()
export class RestaurantRepository implements IRestaurantRepository {
  register(params: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
