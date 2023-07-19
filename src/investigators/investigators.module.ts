import { Module } from '@nestjs/common';
import { InvestigatorsController } from './investigators.controller';
import { InvestigatorsService } from './investigators.service';
import { TypeOrmExModule } from 'src/config/orm/typeorm-ex.module';
import { InvestigatorRepository } from './orm/investigator.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([InvestigatorRepository])],
  controllers: [InvestigatorsController],
  providers: [InvestigatorsService],
})
export class InvestigatorsModule {}
