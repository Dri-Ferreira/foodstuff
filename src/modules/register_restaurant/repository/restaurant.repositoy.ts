import { Injectable } from '@nestjs/common';
import { IRestaurantRepository } from '../structure/repository.structure';
import { PrismaService } from 'src/database/clientPrisma';
import { createRestaurantParams } from '../types/register_params';

@Injectable()
export class RestaurantRepository implements IRestaurantRepository {
  constructor(private readonly prisma: PrismaService) {}
  register(params: createRestaurantParams): Promise<any> {
    return this.prisma.restaurant.create({
      data: { ...params },
    });
  }
}
