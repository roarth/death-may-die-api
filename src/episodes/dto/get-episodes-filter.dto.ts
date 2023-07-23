import { IsNotEmpty, IsOptional } from 'class-validator';

export class GetEpisodesFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
