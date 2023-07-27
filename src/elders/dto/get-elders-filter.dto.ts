import { IsNotEmpty, IsOptional } from 'class-validator';

export class GetEldersFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
