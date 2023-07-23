import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { GetEpisodesFilterDto } from './dto/get-episodes-filter.dto';
import { Episode } from './orm/episode.entity';
import { CreateEpisodeDto } from './dto/create-episode.dto';

@Controller('episodes')
export class EpisodesController {
  constructor(private episodesService: EpisodesService) {}

  @Get()
  getInvestigators(
    @Query(ValidationPipe) getEpisodesFilterDto: GetEpisodesFilterDto,
  ): Promise<Episode[]> {
    return this.episodesService.getEpisodes(getEpisodesFilterDto);
  }

  @Get('/:id')
  getEpisodeById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<Episode> {
    return this.episodesService.getEpisodeById(id);
  }

  @Post()
  createEpisode(
    @Body(ValidationPipe) createEpisodeDto: CreateEpisodeDto,
  ): Promise<Episode> {
    return this.episodesService.createEpisode(createEpisodeDto);
  }
}
