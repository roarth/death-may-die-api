import { Module } from '@nestjs/common';
import { EpisodesController } from './episodes.controller';
import { EpisodesService } from './episodes.service';
import { EpisodeRepository } from './orm/episode.repository';
import { TypeOrmExModule } from 'src/config/orm/typeorm-ex.module';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([EpisodeRepository])],
  controllers: [EpisodesController],
  providers: [EpisodesService],
})
export class EpisodesModule {}
