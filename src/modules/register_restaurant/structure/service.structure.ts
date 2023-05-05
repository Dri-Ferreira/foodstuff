import { createRestaurantParams } from '../types/register_params';

export interface ICreateRestaurantService {
  execute(params: createRestaurantParams): Promise<any>;
}
