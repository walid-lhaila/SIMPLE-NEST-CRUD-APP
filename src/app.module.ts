import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CarModule } from './Car/car.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/SIMPLE_CRUDE_NEST'),
    UsersModule,
    CarModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
