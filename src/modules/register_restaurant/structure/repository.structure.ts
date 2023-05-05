import { createRestaurantParams } from '../types/register_params';

export interface IRestaurantRepository {
  register(params: createRestaurantParams): Promise<any>;
}
