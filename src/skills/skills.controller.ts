import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { Skill } from './orm/skill.entity';
import { GetSkillsFilterDto } from './dto/get-skills-filter.dto';

@Controller('skills')
export class SkillsController {
  constructor(private skillsService: SkillsService) {}

  @Get()
  getSkills(
    @Query(ValidationPipe) getSkillsFilterDto: GetSkillsFilterDto,
  ): Promise<Skill[]> {
    return this.skillsService.getSkills(getSkillsFilterDto);
  }

  @Post()
  createSkill(
    @Body(ValidationPipe) createSkillDto: CreateSkillDto,
  ): Promise<Skill> {
    return this.skillsService.createSkill(createSkillDto);
  }
}
