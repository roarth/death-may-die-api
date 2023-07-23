import { CustomRepository } from 'src/config/orm/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Skill } from './skill.entity';
import { InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateSkillDto } from '../dto/create-skill.dto';
import { GetSkillsFilterDto } from '../dto/get-skills-filter.dto';

@CustomRepository(Skill)
export class SkillRepository extends Repository<Skill> {
  private logger = new Logger('SkillRepository');

  async getSkills(getSkillsFilterDto: GetSkillsFilterDto): Promise<Skill[]> {
    const { search } = getSkillsFilterDto;
    const query = this.createQueryBuilder('skill');

    if (search) {
      query.andWhere('(skill.name LIKE :search)', {
        search: `%${search}%`,
      });
    }

    try {
      return await query.getMany();
    } catch (error) {
      this.logger.error(
        `Failed to get Skills. Filters: ${JSON.stringify(getSkillsFilterDto)}`,
        error.stack,
      );
      throw new InternalServerErrorException();
    }
  }

  async createSkill(createSkillDto: CreateSkillDto) {
    const skill = new Skill();
    const { name, description } = createSkillDto;

    skill.name = name;
    skill.description = description;

    try {
      await skill.save();
      this.logger.verbose(`Created the Skill w/ id: ${skill.id}`);
      return skill;
    } catch (error) {
      console.log(error);
    }
  }
}
