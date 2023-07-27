import { Module } from '@nestjs/common';
import { PingModule } from './ping/ping.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from './config/orm/typeorm-ex.module';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { InvestigatorsModule } from './investigators/investigators.module';
import { SeasonsModule } from './seasons/seasons.module';
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MonstersModule } from './monsters/monsters.module';
import { SkillsModule } from './skills/skills.module';
import { TerrainsModule } from './terrains/terrains.module';
import { EldersModule } from './elders/elders.module';
import { EpisodesModule } from './episodes/episodes.module';
import { EnemiesModule } from './enemies/enemies.module';
import { StatsModule } from './stats/stats.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    TypeOrmExModule.forCustomRepository([]),
    PingModule,
    InvestigatorsModule,
    SeasonsModule,
    EpisodesModule,
    CommonModule,
    AuthModule,
    UsersModule,
    MonstersModule,
    SkillsModule,
    TerrainsModule,
    EldersModule,
    EnemiesModule,
    StatsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
