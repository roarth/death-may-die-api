import { Module } from '@nestjs/common';
import { SkillsController } from './skills.controller';
import { SkillsService } from './skills.service';
import { TypeOrmExModule } from 'src/config/orm/typeorm-ex.module';
import { SkillRepository } from './orm/skill.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([SkillRepository])],
  controllers: [SkillsController],
  providers: [SkillsService],
})
export class SkillsModule {}
