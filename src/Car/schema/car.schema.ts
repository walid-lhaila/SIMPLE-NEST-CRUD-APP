import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

@Schema()
export class Car extends Document {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  type: string;

  @Prop({ type: Types.ObjectId, ref: 'Users', required: true })
  driver: Types.ObjectId;
}

export type CarDocument = Car & Document;
export const CarSchema = SchemaFactory.createForClass(Car);