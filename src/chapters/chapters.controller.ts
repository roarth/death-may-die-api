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
import { ChaptersService } from './chapters.service';
import { GetChaptersFilterDto } from './dto/get-chapters-filter.dto';
import { Chapter } from './orm/chapter.entity';
import { CreateChapterDto } from './dto/create-chapter.dto';

@Controller('chapters')
export class ChaptersController {
  constructor(private chaptersService: ChaptersService) {}

  @Get()
  getInvestigators(
    @Query(ValidationPipe) getChaptersFilterDto: GetChaptersFilterDto,
  ): Promise<Chapter[]> {
    return this.chaptersService.getChapters(getChaptersFilterDto);
  }

  @Get('/:id')
  getInvestigatorById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<Chapter> {
    return this.chaptersService.getChapterById(id);
  }

  @Post()
  createInvestigator(
    @Body(ValidationPipe) createChapterDto: CreateChapterDto,
  ): Promise<Chapter> {
    return this.chaptersService.createChapter(createChapterDto);
  }
}
