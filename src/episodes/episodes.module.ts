import { Module } from '@nestjs/common';
import { EpisodesController } from './episodes.controller';
import { EpisodesService } from './episodes.service';
import { EpisodeRepository } from './orm/episode.repository';
import { TypeOrmExModule } from 'src/config/orm/typeorm-ex.module';
import { SeasonsService } from 'src/seasons/seasons.service';
import { SeasonRepository } from 'src/seasons/orm/season.repository';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([EpisodeRepository]),
    TypeOrmExModule.forCustomRepository([SeasonRepository]),
  ],
  controllers: [EpisodesController],
  providers: [EpisodesService, SeasonsService],
})
export class EpisodesModule {}
