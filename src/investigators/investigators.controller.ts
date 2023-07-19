import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateInvestigatorDto } from './dto/create-investigator.dto';
import { Investigator } from './orm/investigator.entity';
import { InvestigatorsService } from './investigators.service';
import { GetInvestigatorsFilterDto } from './dto/get-investigators-filter.dto';

@Controller('investigators')
export class InvestigatorsController {
  constructor(private investigatorService: InvestigatorsService) {}

  @Get()
  getInvestigators(
    @Query(ValidationPipe) getInvestigatorsFilterDto: GetInvestigatorsFilterDto,
  ): Promise<Investigator[]> {
    return this.investigatorService.getInvestigators(getInvestigatorsFilterDto);
  }

  @Post()
  createInvestigator(
    @Body(ValidationPipe) createInvestigatorDto: CreateInvestigatorDto,
  ): Promise<Investigator> {
    return this.investigatorService.createInvestigator(createInvestigatorDto);
  }
}
