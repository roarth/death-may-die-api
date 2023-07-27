import { IsNotEmpty, IsUUID, MinLength } from 'class-validator';

export class CreateEpisodeDto {
  @IsNotEmpty()
  @MinLength(5)
  name: string;

  @IsNotEmpty()
  @MinLength(5)
  title: string;

  @IsNotEmpty()
  @IsUUID(4)
  season: string;
}
