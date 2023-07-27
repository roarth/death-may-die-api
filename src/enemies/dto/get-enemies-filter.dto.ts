import { IsNotEmpty, IsOptional } from 'class-validator';

export class GetEnemiesFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
