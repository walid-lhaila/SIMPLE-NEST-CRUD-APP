import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Car, CarDocument } from './schema/car.schema';
import { Model } from 'mongoose';
import { CreateCarDto } from './dto/createCar.dto';

@Injectable()
export class CarService {
  constructor(@InjectModel (Car.name) private CarModel: Model<CarDocument> ) {}

  async createCar(createCarDto: CreateCarDto): Promise<Car> {
    const createCar = new this.CarModel(createCarDto);
    return createCar.save();
  }

  async getAllCars(): Promise<Car[]> {
    const cars = this.CarModel.find();
    return cars;
  }

  async deleteCar(id: string): Promise<any> {
    const deleteCar = this.CarModel.findByIdAndDelete({ _id: id });
    return deleteCar;
  }

  async updateCar(id: string, updateData: Partial<Car> ): Promise<Car> {
    const updatedCar = this.CarModel.findByIdAndUpdate(id, updateData, { new: true });
    return updatedCar;
  }
}
