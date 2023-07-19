import { IsNotEmpty, IsOptional } from 'class-validator';

export class GetInvestigatorsFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
