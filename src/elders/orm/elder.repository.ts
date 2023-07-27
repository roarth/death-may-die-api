import { CustomRepository } from 'src/config/orm/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { Elder } from './elder.entity';
import { GetEldersFilterDto } from '../dto/get-elders-filter.dto';

@CustomRepository(Elder)
export class ElderRepository extends Repository<Elder> {
  private logger = new Logger('ElderRepository');

  async getElders(getEldersFilterDto: GetEldersFilterDto): Promise<Elder[]> {
    const { search } = getEldersFilterDto;
    const query = this.createQueryBuilder('elder');

    if (search) {
      query.andWhere('(elder.name LIKE :search)', {
        search: `%${search}%`,
      });
    }

    try {
      return await query.getMany();
    } catch (error) {
      this.logger.error(
        `Failed to get Elders. Filters: ${JSON.stringify(getEldersFilterDto)}`,
        error.stack,
      );
      throw new InternalServerErrorException();
    }
  }
}
