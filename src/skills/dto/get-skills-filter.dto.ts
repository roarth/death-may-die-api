import { IsNotEmpty, IsOptional } from 'class-validator';

export class GetSkillsFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
