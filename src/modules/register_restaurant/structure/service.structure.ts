import { Restaurant } from '@prisma/client';
import {
  createRestaurantParams,
  getIdRestaurantParams,
} from '../types/register_params';

export interface ICreateRestaurantService {
  execute(params: createRestaurantParams): Promise<Restaurant>;
}

export interface IGetAllRestaurantService {
  execute(): Promise<Restaurant[]>;
}

export interface IGetIdRestaurant {
  execute(params: getIdRestaurantParams): Promise<Restaurant>;
}
