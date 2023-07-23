import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateEpisodeDto {
  @IsNotEmpty()
  @MinLength(5)
  name: string;

  @IsNotEmpty()
  @MinLength(5)
  title: string;
}
