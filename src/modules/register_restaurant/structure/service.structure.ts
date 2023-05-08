import { Restaurant } from '@prisma/client';
import { createRestaurantParams } from '../types/register_params';

export interface ICreateRestaurantService {
  execute(params: createRestaurantParams): Promise<Restaurant>;
}

export interface IGetAllRestaurantService {
  execute(): Promise<Restaurant[]>;
}
