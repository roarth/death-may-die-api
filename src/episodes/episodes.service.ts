import { Injectable, NotFoundException } from '@nestjs/common';
import { EpisodeRepository } from './orm/episode.repository';
import { GetEpisodesFilterDto } from './dto/get-episodes-filter.dto';
import { Episode } from './orm/episode.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEpisodeDto } from './dto/create-episode.dto';

@Injectable()
export class EpisodesService {
  constructor(
    @InjectRepository(EpisodeRepository)
    private episodeRepository: EpisodeRepository,
  ) {}

  async getEpisodes(
    getEpisodesFilterDto: GetEpisodesFilterDto,
  ): Promise<Episode[]> {
    return this.episodeRepository.getEpisodes(getEpisodesFilterDto);
  }

  async getEpisodeById(id: string): Promise<Episode> {
    const found = await this.episodeRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Episode with id "${id}" does not exists`);
    }

    return found;
  }

  async createEpisode(createEpisodeDto: CreateEpisodeDto): Promise<Episode> {
    return this.episodeRepository.createEpisode(createEpisodeDto);
  }
}
