import { IsNotEmpty, IsOptional } from 'class-validator';

export class GetSeasonsFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
