import { Module } from '@nestjs/common';
import { EnemyRepository } from './orm/enemy.repository';
import { TypeOrmExModule } from 'src/config/orm/typeorm-ex.module';
import { EnemiesController } from './enemies.controller';
import { EnemiesService } from './enemies.service';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([EnemyRepository])],
  controllers: [EnemiesController],
  providers: [EnemiesService],
})
export class EnemiesModule {}
