import {
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UserService } from 'src/users/user.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('/register')
  register(
    @Body(ValidationPipe) registerUserDto: RegisterUserDto,
  ): Promise<void> {
    return this.authService.register(registerUserDto);
  }

  @Post('/login')
  login(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<{
    accessToken: string;
  }> {
    return this.authService.login(authCredentialsDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('verify_token')
  verifyToken(@Request() req: any) {
    return this.userService.getUserProfile(req.user.id);
  }
}
