import { Injectable } from '@nestjs/common';
import { SkillRepository } from './orm/skill.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSkillDto } from './dto/create-skill.dto';
import { Skill } from './orm/skill.entity';
import { GetSkillsFilterDto } from './dto/get-skills-filter.dto';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(SkillRepository)
    private skillRepository: SkillRepository,
  ) {}

  async getSkills(getSkillsFilterDto: GetSkillsFilterDto): Promise<Skill[]> {
    return this.skillRepository.getSkills(getSkillsFilterDto);
  }

  async createSkill(createSkillDto: CreateSkillDto): Promise<Skill> {
    return this.skillRepository.createSkill(createSkillDto);
  }
}
