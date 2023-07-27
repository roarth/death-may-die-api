import { Injectable, NotFoundException } from '@nestjs/common';
import { EnemyRepository } from './orm/enemy.repository';
import { GetEnemiesFilterDto } from './dto/get-enemies-filter.dto';
import { Enemy } from './orm/enemy.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEnemyDto } from './dto/create-enemy.dto';

@Injectable()
export class EnemiesService {
  constructor(
    @InjectRepository(EnemyRepository)
    private enemyRepository: EnemyRepository,
  ) {}

  async getEnemies(getEnemiesFilterDto: GetEnemiesFilterDto): Promise<Enemy[]> {
    return this.enemyRepository.getEnemies(getEnemiesFilterDto);
  }

  async getEnemyById(id: string): Promise<Enemy> {
    const found = await this.enemyRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Enemy with id "${id}" does not exists`);
    }

    return found;
  }

  async createEnemy(createEnemyDto: CreateEnemyDto): Promise<Enemy> {
    return this.enemyRepository.createEnemy(createEnemyDto);
  }
}
