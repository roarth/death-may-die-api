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
import { EnemiesService } from './enemies.service';
import { GetEnemiesFilterDto } from './dto/get-enemies-filter.dto';
import { Enemy } from './orm/enemy.entity';
import { CreateEnemyDto } from './dto/create-enemy.dto';

@Controller('enemies')
export class EnemiesController {
  constructor(private enemiesService: EnemiesService) {}

  @Get()
  getEnemies(
    @Query(ValidationPipe) getEnemiesFilterDto: GetEnemiesFilterDto,
  ): Promise<Enemy[]> {
    return this.enemiesService.getEnemies(getEnemiesFilterDto);
  }

  @Get('/:id')
  getEnemyById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<Enemy> {
    return this.enemiesService.getEnemyById(id);
  }

  @Post()
  createEnemy(
    @Body(ValidationPipe) createEnemyDto: CreateEnemyDto,
  ): Promise<Enemy> {
    return this.enemiesService.createEnemy(createEnemyDto);
  }
}
