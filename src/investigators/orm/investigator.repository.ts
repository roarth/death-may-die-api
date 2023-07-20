import { CustomRepository } from 'src/config/orm/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Investigator } from './investigator.entity';
import { CreateInvestigatorDto } from '../dto/create-investigator.dto';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { GetInvestigatorsFilterDto } from '../dto/get-investigators-filter.dto';

@CustomRepository(Investigator)
export class InvestigatorRepository extends Repository<Investigator> {
  private logger = new Logger('ProjectRepository');

  async getInvestigators(
    getInvestigatorsFilterDto: GetInvestigatorsFilterDto,
  ): Promise<Investigator[]> {
    const { search } = getInvestigatorsFilterDto;
    const query = this.createQueryBuilder('investigator');

    if (search) {
      query.andWhere('(investigator.name LIKE :search)', {
        search: `%${search}%`,
      });
    }

    try {
      return await query.getMany();
    } catch (error) {
      this.logger.error(
        `Failed to get Investigator. Filters: ${JSON.stringify(
          getInvestigatorsFilterDto,
        )}`,
        error.stack,
      );
      throw new InternalServerErrorException();
    }
  }

  async createInvestigator(createInvestigatorDto: CreateInvestigatorDto) {
    const investigator = new Investigator();
    const { name, avatar } = createInvestigatorDto;

    investigator.name = name;
    investigator.avatar = avatar;

    try {
      await investigator.save();
      this.logger.verbose(`Created the Investigator w/ id: ${investigator.id}`);
      return investigator;
    } catch (error) {
      console.log(error);
    }
  }
}
