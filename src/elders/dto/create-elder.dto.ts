import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateElderDto {
  @IsNotEmpty()
  @MinLength(5)
  name: string;
}
