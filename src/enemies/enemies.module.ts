import { Module } from '@nestjs/common';
import { EnemyRepository } from './orm/enemy.repository';
import { TypeOrmExModule } from 'src/config/orm/typeorm-ex.module';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([EnemyRepository])],
})
export class EnemiesModule {}
