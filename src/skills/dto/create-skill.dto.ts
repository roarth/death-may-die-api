import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateSkillDto {
  @IsNotEmpty()
  @MinLength(5)
  name: string;

  @IsNotEmpty()
  @MinLength(5)
  description: string;
}
