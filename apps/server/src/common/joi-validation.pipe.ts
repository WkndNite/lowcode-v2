import { BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import * as Joi from "joi";

@Injectable()
export class JoiValidationPipe<T = unknown> implements PipeTransform<T, T> {
  constructor(private readonly schema: Joi.Schema) {}

  transform(value: T): T {
    const { error, value: validatedValue } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException(error.details[0].message);
    }
    return validatedValue;
  }
}
