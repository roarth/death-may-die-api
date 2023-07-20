import { IsNotEmpty, IsOptional } from 'class-validator';

export class GetChaptersFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
