import { CustomRepository } from 'src/config/orm/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Enemy } from './enemy.entity';
import { Logger } from '@nestjs/common';

@CustomRepository(Enemy)
export class EnemyRepository extends Repository<Enemy> {
  private logger = new Logger('EnemyRepository');
}
