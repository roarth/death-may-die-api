import { CustomRepository } from 'src/config/orm/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { Chapter } from './chapter.entity';
import { GetChaptersFilterDto } from '../dto/get-chapters-filter.dto';
import { CreateChapterDto } from '../dto/create-chapter.dto';

@CustomRepository(Chapter)
export class ChapterRepository extends Repository<Chapter> {
  private logger = new Logger('Chapterepository');

  async getChapters(
    getChaptersFilterDto: GetChaptersFilterDto,
  ): Promise<Chapter[]> {
    const { search } = getChaptersFilterDto;
    const query = this.createQueryBuilder('chapter');

    if (search) {
      query.andWhere('(chapter.name LIKE :search)', {
        search: `%${search}%`,
      });
    }

    try {
      return await query.getMany();
    } catch (error) {
      this.logger.error(
        `Failed to get Chapters. Filters: ${JSON.stringify(
          getChaptersFilterDto,
        )}`,
        error.stack,
      );
      throw new InternalServerErrorException();
    }
  }

  async createChapter(createChapterDto: CreateChapterDto) {
    const chapter = new Chapter();
    const { name, title } = createChapterDto;

    chapter.name = name;
    chapter.title = title;

    try {
      await chapter.save();
      this.logger.verbose(`Created the Chapter w/ id: ${chapter.id}`);
      return chapter;
    } catch (error) {
      console.log(error);
    }
  }
}
