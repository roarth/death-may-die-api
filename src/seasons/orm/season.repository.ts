import { CustomRepository } from 'src/config/orm/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { Season } from './season.entity';
import { GetSeasonsFilterDto } from '../dto/get-seasons-filter.dto';
import { CreateSeasonDto } from '../dto/create-season.dto';

@CustomRepository(Season)
export class SeasonRepository extends Repository<Season> {
  private logger = new Logger('ProjectRepository');

  async getSeasons(
    getSeasonsFilterDto: GetSeasonsFilterDto,
  ): Promise<Season[]> {
    const { search } = getSeasonsFilterDto;
    const query = this.createQueryBuilder('season')
      .leftJoinAndSelect('season.investigators', 'investigators')
      .orderBy('season.name');

    if (search) {
      query.andWhere('(season.name LIKE :search)', {
        search: `%${search}%`,
      });
    }

    try {
      return await query.getMany();
    } catch (error) {
      this.logger.error(
        `Failed to get Seasons. Filters: ${JSON.stringify(
          getSeasonsFilterDto,
        )}`,
        error.stack,
      );
      throw new InternalServerErrorException();
    }
  }

  async createSeason(createSeasonDto: CreateSeasonDto) {
    const season = new Season();
    const { name } = createSeasonDto;

    season.name = name;

    try {
      await season.save();
      this.logger.verbose(`Created the Season w/ id: ${season.id}`);
      return season;
    } catch (error) {
      console.log(error);
    }
  }
}
