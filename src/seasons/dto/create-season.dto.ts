import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateSeasonDto {
  @IsNotEmpty()
  @MinLength(5)
  name: string;
}
