import { Module } from '@nestjs/common';
import { ChaptersController } from './chapters.controller';
import { ChaptersService } from './chapters.service';
import { ChapterRepository } from './orm/chapter.repository';
import { TypeOrmExModule } from 'src/config/orm/typeorm-ex.module';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([ChapterRepository])],
  controllers: [ChaptersController],
  providers: [ChaptersService],
})
export class ChaptersModule {}
