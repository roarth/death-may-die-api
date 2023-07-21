import { Module } from '@nestjs/common';
import { SeasonsController } from './seasons.controller';
import { SeasonsService } from './seasons.service';
import { SeasonRepository } from './orm/season.repository';
import { TypeOrmExModule } from 'src/config/orm/typeorm-ex.module';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([SeasonRepository])],
  controllers: [SeasonsController],
  providers: [SeasonsService],
  exports: [SeasonsService],
})
export class SeasonsModule {}
