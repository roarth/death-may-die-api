import { CustomRepository } from 'src/config/orm/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Enemy } from './enemy.entity';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { GetEnemiesFilterDto } from '../dto/get-enemies-filter.dto';

@CustomRepository(Enemy)
export class EnemyRepository extends Repository<Enemy> {
  private logger = new Logger('EnemyRepository');

  async getEnemies(getEnemiesFilterDto: GetEnemiesFilterDto): Promise<Enemy[]> {
    const { search } = getEnemiesFilterDto;
    const query = this.createQueryBuilder('enemy')
      .select(['enemy'])
      .orderBy('enemy.name');

    if (search) {
      query.andWhere('(enemy.name LIKE :search)', {
        search: `%${search}%`,
      });
    }

    try {
      return await query.getMany();
    } catch (error) {
      this.logger.error(
        `Failed to get Enemies. Filters: ${JSON.stringify(
          getEnemiesFilterDto,
        )}`,
        error.stack,
      );
      throw new InternalServerErrorException();
    }
  }
}
