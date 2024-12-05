import { Body, Controller, Get, Param, Post, Delete, Put } from "@nestjs/common";
import { CarService } from './car.service';
import { CreateCarDto } from './dto/createCar.dto';
import { Car } from './schema/car.schema';

@Controller('Car')
export class CarController {
  constructor(private readonly carService: CarService) {}
  @Post()
  async createCar(@Body() createCarDto: CreateCarDto) {
    return this.carService.createCar(createCarDto);
  }

  @Get()
  async getAllVCars() {
    return this.carService.getAllCars();
  }

  @Delete('/:id')
  async deleteCar(@Param('id') id: string) {
    await this.carService.deleteCar(id);
    return { message: 'Car Deleted Successfully' }
  }

  @Put('/:id')
  async updateCar(@Param('id') id: string, @Body() updateData: Partial<Car>) {
    const updatedCar = await this.carService.updateCar(id, updateData);
    return { message: 'Car Updated Successfully', updatedCar};
  }
}
