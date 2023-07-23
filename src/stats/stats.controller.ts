import { Controller, Get } from '@nestjs/common';
import { StatsGame } from './types/stats-game.type';
import { StatsService } from './stats.service';

@Controller('stats')
export class StatsController {
  constructor(private statsService: StatsService) {}
  @Get('/game')
  getGameObjectsStats(): Promise<StatsGame> {
    return this.statsService.getGameObjectsStats();
  }
}
