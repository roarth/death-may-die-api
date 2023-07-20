import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { SeasonsService } from './seasons.service';
import { CreateInvestigatorDto } from 'src/investigators/dto/create-investigator.dto';
import { Investigator } from 'src/investigators/orm/investigator.entity';
import { GetSeasonsFilterDto } from './dto/get-seasons-filter.dto';
import { CreateSeasonDto } from './dto/create-season.dto';
import { Season } from './orm/season.entity';

@Controller('seasons')
export class SeasonsController {
  constructor(private seasonsService: SeasonsService) {}

  @Get()
  getInvestigators(
    @Query(ValidationPipe) getSeasonsFilterDto: GetSeasonsFilterDto,
  ): Promise<Season[]> {
    return this.seasonsService.getSeasons(getSeasonsFilterDto);
  }

  @Get('/:id')
  getInvestigatorById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<Season> {
    return this.seasonsService.getSeasonById(id);
  }

  @Post()
  createInvestigator(
    @Body(ValidationPipe) createSeasonDto: CreateSeasonDto,
  ): Promise<Season> {
    return this.seasonsService.createSeason(createSeasonDto);
  }
}
