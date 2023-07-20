import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSeasonDto } from './dto/create-season.dto';
import { GetSeasonsFilterDto } from './dto/get-seasons-filter.dto';
import { Season } from './orm/season.entity';
import { SeasonRepository } from './orm/season.repository';

@Injectable()
export class SeasonsService {
  constructor(
    @InjectRepository(SeasonRepository)
    private seasonRepository: SeasonRepository,
  ) {}

  async getSeasons(
    getSeasonsFilterDto: GetSeasonsFilterDto,
  ): Promise<Season[]> {
    return this.seasonRepository.getSeasons(getSeasonsFilterDto);
  }

  async getSeasonById(id: string): Promise<Season> {
    const found = await this.seasonRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Season with id "${id}" does not exists`);
    }

    return found;
  }

  async createSeason(createSeasonDto: CreateSeasonDto): Promise<Season> {
    return this.seasonRepository.createSeason(createSeasonDto);
  }
}
