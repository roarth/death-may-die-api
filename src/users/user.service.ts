import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './orm/user.repository';

@Injectable()
export class UserService {
  private logger = new Logger('UserSerice');

  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async getUserProfile(id: string) {
    return this.userRepository.getUserProfile(id);
  }
}
