import { Restaurant } from '@prisma/client';
import { createRestaurantParams } from '../types/register_params';

export interface IRestaurantRepository {
  register(params: createRestaurantParams): Promise<Restaurant>;
  searchAll_restaurant(): Promise<Restaurant[]>;
}
