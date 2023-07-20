import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateChapterDto {
  @IsNotEmpty()
  @MinLength(5)
  name: string;
}
