import { Module } from '@nestjs/common';
import { PingModule } from './ping/ping.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from './config/orm/typeorm-ex.module';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { InvestigatorsModule } from './investigators/investigators.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    TypeOrmExModule.forCustomRepository([]),
    PingModule,
    InvestigatorsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
