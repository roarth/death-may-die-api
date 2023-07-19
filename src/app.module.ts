import { Module } from '@nestjs/common';
import { CharactersModule } from './characters/characters.module';
import { PingModule } from './ping/ping.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from './config/orm/typeorm-ex.module';
import { typeOrmConfigAsync } from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    TypeOrmExModule.forCustomRepository([]),
    CharactersModule,
    PingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
