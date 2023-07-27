import { Module } from '@nestjs/common';
import { StatsService } from './stats.service';
import { StatsController } from './stats.controller';
import { TypeOrmExModule } from 'src/config/orm/typeorm-ex.module';
import { SeasonRepository } from 'src/seasons/orm/season.repository';
import { EnemyRepository } from 'src/enemies/orm/enemy.repository';
import { EpisodeRepository } from 'src/episodes/orm/episode.repository';
import { InvestigatorRepository } from 'src/investigators/orm/investigator.repository';
import { SkillRepository } from 'src/skills/orm/skill.repository';
import { ElderRepository } from 'src/elders/orm/elder.repository';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([SeasonRepository]),
    TypeOrmExModule.forCustomRepository([InvestigatorRepository]),
    TypeOrmExModule.forCustomRepository([EpisodeRepository]),
    TypeOrmExModule.forCustomRepository([SkillRepository]),
    TypeOrmExModule.forCustomRepository([EnemyRepository]),
    TypeOrmExModule.forCustomRepository([ElderRepository]),
  ],
  providers: [StatsService],
  controllers: [StatsController],
})
export class StatsModule {}
