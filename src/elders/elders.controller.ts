import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { GetEldersFilterDto } from './dto/get-elders-filter.dto';
import { Elder } from './orm/elder.entity';
import { EldersService } from './elders.service';

@Controller('elders')
export class EldersController {
  constructor(private eldersService: EldersService) {}

  @Get()
  getElders(
    @Query(ValidationPipe) getEldersFilterDto: GetEldersFilterDto,
  ): Promise<Elder[]> {
    return this.eldersService.getElders(getEldersFilterDto);
  }
}
