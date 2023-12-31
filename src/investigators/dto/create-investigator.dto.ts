import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateInvestigatorDto {
  @IsNotEmpty()
  @MinLength(5)
  name: string;

  @IsNotEmpty()
  @MinLength(5)
  avatar: string;
}
