import { Injectable } from '@nestjs/common';
import { StatsGame } from './types/stats-game.type';
import { InjectRepository } from '@nestjs/typeorm';
import { SeasonRepository } from 'src/seasons/orm/season.repository';
import { InvestigatorRepository } from 'src/investigators/orm/investigator.repository';
import { EpisodeRepository } from 'src/episodes/orm/episode.repository';
import { SkillRepository } from 'src/skills/orm/skill.repository';
import { EnemyRepository } from 'src/enemies/orm/enemy.repository';

@Injectable()
export class StatsService {
  constructor(
    @InjectRepository(SeasonRepository)
    private seasonRepository: SeasonRepository,
    @InjectRepository(InvestigatorRepository)
    private investigatorsRepository: InvestigatorRepository,
    @InjectRepository(EpisodeRepository)
    private episodeRepository: EpisodeRepository,
    @InjectRepository(SkillRepository)
    private skillRepository: SkillRepository,
    @InjectRepository(EnemyRepository)
    private enemyRepository: EnemyRepository,
  ) {}

  async getGameObjectsStats(): Promise<StatsGame> {
    const seasonsCount = await this.seasonRepository.count();
    const episodesCount = await this.episodeRepository.count();
    const investigatorsCount = await this.investigatorsRepository.count();
    const skillsCount = await this.skillRepository.count();
    const enemiesCount = await this.enemyRepository.count();

    return {
      seasons: seasonsCount,
      episodes: episodesCount,
      investigators: investigatorsCount,
      skills: skillsCount,
      elders: 3,
      enemies: enemiesCount,
    };
  }
}
