import { IsIn, IsNotEmpty, IsUrl, MinLength } from 'class-validator';
import { EnemyType } from '../enum/enemy-type.enum';

export class CreateEnemyDto {
  @IsNotEmpty()
  @MinLength(5)
  name: string;

  @IsNotEmpty()
  @IsIn(['CULTIST', 'MONSTER'])
  type: EnemyType;

  @IsNotEmpty()
  @IsUrl()
  avatar: string;
}
