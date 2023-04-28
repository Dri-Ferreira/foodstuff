import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterRestaurantModule } from './modules/register_restaurant/register_restaurant.module';

@Module({
  imports: [RegisterRestaurantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
