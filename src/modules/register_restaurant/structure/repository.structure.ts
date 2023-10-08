import { Restaurant } from '@prisma/client';
import {
  createRestaurantParams,
  getIdRestaurantParams,
} from '../types/register_params';
import { UpdateRestauratDto } from '../Dto/update-restaurat.dto';

export interface IRestaurantRepository {
  register(params: createRestaurantParams): Promise<Restaurant>;
  searchAll_restaurant(): Promise<Restaurant[]>;
  searchById(params: getIdRestaurantParams): Promise<Restaurant>;
  updateRestaurant(
    id: string,
    updateRestarantDto: UpdateRestauratDto,
  ): Promise<Restaurant>;
}
