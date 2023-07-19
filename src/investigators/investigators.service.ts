import { Injectable } from '@nestjs/common';
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

  async createInvestigator(
    createInvestigatorDto: CreateInvestigatorDto,
  ): Promise<Investigator> {
    return this.investigatorRepository.createInvestigator(
      createInvestigatorDto,
    );
  }
}
