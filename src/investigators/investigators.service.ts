import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInvestigatorDto } from './dto/create-investigator.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Investigator } from './orm/investigator.entity';
import { InvestigatorRepository } from './orm/investigator.repository';
import { GetInvestigatorsFilterDto } from './dto/get-investigators-filter.dto';

@Injectable()
export class InvestigatorsService {
  constructor(
    @InjectRepository(InvestigatorRepository)
    private investigatorRepository: InvestigatorRepository,
  ) {}

  async getInvestigators(
    getInvestigatorsFilterDto: GetInvestigatorsFilterDto,
  ): Promise<Investigator[]> {
    return this.investigatorRepository.getInvestigators(
      getInvestigatorsFilterDto,
    );
  }

  async getInvestigatorById(id: string): Promise<Investigator> {
    const found = await this.investigatorRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(
        `Investigator with id "${id}" does not exists`,
      );
    }

    return found;
  }

  async createInvestigator(
    createInvestigatorDto: CreateInvestigatorDto,
  ): Promise<Investigator> {
    return this.investigatorRepository.createInvestigator(
      createInvestigatorDto,
    );
  }

  async deleteInvestigator(id: string): Promise<void> {
    const result = await this.investigatorRepository.delete({ id });

    if (result.affected === 0) {
      throw new NotFoundException(
        `Investigator with id "${id}" does not exists`,
      );
    }
  }
}
