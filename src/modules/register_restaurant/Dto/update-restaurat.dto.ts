import { IsString, MinLength } from 'class-validator';
import { createRestaurantParams } from '../types/register_params';

export class UpdateRestauratDto implements createRestaurantParams {
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  address: string;

  @IsString()
  businessHours: string;

  @IsString()
  photo: string;
}
