import { getModelForClass, prop } from '@typegoose/typegoose'
import { platesOrder } from '@/consts'
import { type PlateOrder } from '@/types'

export class Plate {
  @prop({ required: [true, 'El nombre es requerido'], unique: true })
  name: string

  @prop({ required: [true, 'La imagen es requerida'], unique: true })
  image: string

  @prop({ required: [true, 'Tipo de orden requerida'], enum: platesOrder })
  order: PlateOrder
}

export const PlateModel = getModelForClass(Plate)
