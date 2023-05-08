import { Injectable } from '@nestjs/common';
import { IRestaurantRepository } from '../structure/repository.structure';
import { PrismaService } from 'src/database/clientPrisma';
import { createRestaurantParams } from '../types/register_params';
import { Restaurant } from '@prisma/client';

@Injectable()
export class RestaurantRepository implements IRestaurantRepository {
  constructor(private readonly prisma: PrismaService) {}
  searchAll_restaurant(): Promise<Restaurant[]> {
    return this.prisma.restaurant.findMany();
  }
  register(params: createRestaurantParams): Promise<Restaurant> {
    return this.prisma.restaurant.create({
      data: { ...params },
    });
  }
}
