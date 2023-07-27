import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { EnemiesService } from './enemies.service';
import { GetEnemiesFilterDto } from './dto/get-enemies-filter.dto';
import { Enemy } from './orm/enemy.entity';

@Controller('enemies')
export class EnemiesController {
  constructor(private enemiesService: EnemiesService) {}

  @Get()
  getEnemies(
    @Query(ValidationPipe) getEnemiesFilterDto: GetEnemiesFilterDto,
  ): Promise<Enemy[]> {
    return this.enemiesService.getEnemies(getEnemiesFilterDto);
  }
}
