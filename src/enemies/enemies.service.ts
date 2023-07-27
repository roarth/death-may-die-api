import { Injectable } from '@nestjs/common';
import { EnemyRepository } from './orm/enemy.repository';
import { GetEnemiesFilterDto } from './dto/get-enemies-filter.dto';
import { Enemy } from './orm/enemy.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EnemiesService {
  constructor(
    @InjectRepository(EnemyRepository)
    private enemyRepository: EnemyRepository,
  ) {}

  async getEnemies(getEnemiesFilterDto: GetEnemiesFilterDto): Promise<Enemy[]> {
    return this.enemyRepository.getEnemies(getEnemiesFilterDto);
  }
}
