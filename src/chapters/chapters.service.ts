import { Injectable, NotFoundException } from '@nestjs/common';
import { ChapterRepository } from './orm/chapter.repository';
import { GetChaptersFilterDto } from './dto/get-chapters-filter.dto';
import { Chapter } from './orm/chapter.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateChapterDto } from './dto/create-chapter.dto';

@Injectable()
export class ChaptersService {
  constructor(
    @InjectRepository(ChapterRepository)
    private chapterRepository: ChapterRepository,
  ) {}

  async getChapters(
    getChaptersFilterDto: GetChaptersFilterDto,
  ): Promise<Chapter[]> {
    return this.chapterRepository.getChapters(getChaptersFilterDto);
  }

  async getChapterById(id: string): Promise<Chapter> {
    const found = await this.chapterRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Chapter with id "${id}" does not exists`);
    }

    return found;
  }

  async createChapter(createChapterDto: CreateChapterDto): Promise<Chapter> {
    return this.chapterRepository.createChapter(createChapterDto);
  }
}
