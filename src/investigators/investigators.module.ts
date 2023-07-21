import { Module } from '@nestjs/common';
import { InvestigatorsController } from './investigators.controller';
import { InvestigatorsService } from './investigators.service';
import { TypeOrmExModule } from 'src/config/orm/typeorm-ex.module';
import { InvestigatorRepository } from './orm/investigator.repository';
import { SeasonsService } from 'src/seasons/seasons.service';
import { SeasonRepository } from 'src/seasons/orm/season.repository';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([InvestigatorRepository]),
    TypeOrmExModule.forCustomRepository([SeasonRepository]),
  ],
  controllers: [InvestigatorsController],
  providers: [InvestigatorsService, SeasonsService],
})
export class InvestigatorsModule {}
