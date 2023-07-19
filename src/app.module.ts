import { Module } from '@nestjs/common';
import { CharactersModule } from './characters/characters.module';
import { PingModule } from './ping/ping.module';

@Module({
  imports: [CharactersModule, PingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
