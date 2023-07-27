import { CustomRepository } from 'src/config/orm/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { Episode } from './episode.entity';
import { GetEpisodesFilterDto } from '../dto/get-episodes-filter.dto';
import { CreateEpisodeDto } from '../dto/create-episode.dto';
import { Season } from 'src/seasons/orm/season.entity';

@CustomRepository(Episode)
export class EpisodeRepository extends Repository<Episode> {
  private logger = new Logger('Episodepository');

  async getEpisodes(
    getEpisodesFilterDto: GetEpisodesFilterDto,
  ): Promise<Episode[]> {
    const { search } = getEpisodesFilterDto;
    const query = this.createQueryBuilder('episode')
      .leftJoinAndSelect('episode.season', 'season')
      .select(['episode', 'season']);

    if (search) {
      query.andWhere('(episode.name LIKE :search)', {
        search: `%${search}%`,
      });
    }

    try {
      return await query.getMany();
    } catch (error) {
      this.logger.error(
        `Failed to get Episodes. Filters: ${JSON.stringify(
          getEpisodesFilterDto,
        )}`,
        error.stack,
      );
      throw new InternalServerErrorException();
    }
  }

  async createEpisode(createEpisodeDto: CreateEpisodeDto, season: Season) {
    const episode = new Episode();
    const { name, title } = createEpisodeDto;

    episode.name = name;
    episode.title = title;
    episode.season = season;

    try {
      await episode.save();
      this.logger.verbose(`Created the Episode w/ id: ${episode.id}`);
      return episode;
    } catch (error) {
      console.log(error);
    }
  }
}
