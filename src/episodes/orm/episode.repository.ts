import { CustomRepository } from 'src/config/orm/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { Episode } from './episode.entity';
import { GetEpisodesFilterDto } from '../dto/get-episodes-filter.dto';
import { CreateEpisodeDto } from '../dto/create-episode.dto';

@CustomRepository(Episode)
export class EpisodeRepository extends Repository<Episode> {
  private logger = new Logger('Episodepository');

  async getEpisodes(
    getEpisodesFilterDto: GetEpisodesFilterDto,
  ): Promise<Episode[]> {
    const { search } = getEpisodesFilterDto;
    const query = this.createQueryBuilder('episode');

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

  async createEpisode(createEpisodeDto: CreateEpisodeDto) {
    const episode = new Episode();
    const { name, title } = createEpisodeDto;

    episode.name = name;
    episode.title = title;

    try {
      await episode.save();
      this.logger.verbose(`Created the Episode w/ id: ${episode.id}`);
      return episode;
    } catch (error) {
      console.log(error);
    }
  }
}
