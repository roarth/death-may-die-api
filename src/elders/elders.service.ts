import { Injectable } from '@nestjs/common';
import { ElderRepository } from './orm/elder.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { GetEldersFilterDto } from './dto/get-elders-filter.dto';
import { Elder } from './orm/elder.entity';

@Injectable()
export class EldersService {
  constructor(
    @InjectRepository(ElderRepository)
    private elderRepository: ElderRepository,
  ) {}

  async getElders(getEldersFilterDto: GetEldersFilterDto): Promise<Elder[]> {
    return this.elderRepository.getElders(getEldersFilterDto);
  }
}
