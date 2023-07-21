import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmExModule } from 'src/config/orm/typeorm-ex.module';
import { UserRepository } from 'src/users/orm/user.repository';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UserService } from 'src/users/user.service';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([UserRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: parseInt(process.env.JWT_EXPIRES_IN) || 3600,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtStrategy],
  exports: [PassportModule, JwtStrategy],
})
export class AuthModule {}
