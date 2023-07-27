import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/config/orm/typeorm-ex.module';
import { ElderRepository } from './orm/elder.repository';
import { EldersService } from './elders.service';
import { EldersController } from './elders.controller';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([ElderRepository])],
  providers: [EldersService],
  controllers: [EldersController],
})
export class EldersModule {}
