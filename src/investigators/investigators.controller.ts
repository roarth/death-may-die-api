import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
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

  @Get('/:id')
  getInvestigatorById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<Investigator> {
    return this.investigatorService.getInvestigatorById(id);
  }

  @Post()
  createInvestigator(
    @Body(ValidationPipe) createInvestigatorDto: CreateInvestigatorDto,
  ): Promise<Investigator> {
    return this.investigatorService.createInvestigator(createInvestigatorDto);
  }

  @Delete('/:id')
  deleteInvestigator(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<void> {
    return this.investigatorService.deleteInvestigator(id);
  }
}
