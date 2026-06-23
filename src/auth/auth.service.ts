import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { createHash, randomBytes } from 'crypto';
import { PortfolioService } from '../portfolio/portfolio.service';
import { PrismaService } from '../prisma/prisma.service';
import { formatUserProfile, generateUniqueAccountNumber } from './auth.helpers';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private portfolioService: PortfolioService,
  ) {}

  async register(dto: RegisterDto) {
    const exists = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (exists) throw new ConflictException('Email already registered');

    const passwordHash = await bcrypt.hash(dto.password, 10);
    const account_number = await generateUniqueAccountNumber(this.prisma);

    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        password_hash: passwordHash,
        phone: dto.phone,
        monthly_income: dto.monthly_income ?? 0,
        account_number,
        wallet_balance: 0,
        account_balance: dto.monthly_income ?? 0,
      },
    });
    await this.portfolioService.seedDemoData(user.id);
    const tokens = this.generateTokens(user.id, user.email);
    return { ...tokens, user: formatUserProfile(user) };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const valid = await bcrypt.compare(dto.password, user.password_hash);
    if (!valid) throw new UnauthorizedException('Invalid credentials');

    if (!user.account_number) {
      const account_number = await generateUniqueAccountNumber(this.prisma);
      await this.prisma.user.update({
        where: { id: user.id },
        data: { account_number, last_login: new Date() },
      });
      user.account_number = account_number;
    } else {
      await this.prisma.user.update({
        where: { id: user.id },
        data: { last_login: new Date() },
      });
    }

    const tokens = this.generateTokens(user.id, user.email);
    return { ...tokens, user: formatUserProfile(user) };
  }

  async refresh(refreshToken: string) {
    try {
      const payload = this.jwt.verify(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET,
      });
      return this.generateTokens(payload.userId, payload.email);
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async getMe(userId: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');
    return formatUserProfile(user);
  }

  async updateProfile(userId: number, dto: UpdateProfileDto) {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: {
        name: dto.name,
        phone: dto.phone,
        monthly_income: dto.monthly_income,
        preferred_language: dto.preferred_language,
      },
    });
    return formatUserProfile(user);
  }

  async forgotPassword(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      return { message: 'If that email exists, a reset link has been sent.' };
    }

    const token = randomBytes(32).toString('hex');
    const reset_token_hash = createHash('sha256').update(token).digest('hex');
    const reset_token_expires = new Date(Date.now() + 60 * 60 * 1000);

    await this.prisma.user.update({
      where: { id: user.id },
      data: { reset_token_hash, reset_token_expires },
    });

    const frontend = process.env.FRONTEND_URL || 'http://localhost:3000';
    const resetLink = `${frontend}/reset-password?token=${token}`;
    const isDev = process.env.NODE_ENV !== 'production';

    return {
      message: 'If that email exists, a reset link has been sent.',
      ...(isDev ? { resetLink, resetToken: token } : {}),
    };
  }

  async resetPassword(token: string, password: string) {
    const reset_token_hash = createHash('sha256').update(token).digest('hex');
    const user = await this.prisma.user.findFirst({
      where: {
        reset_token_hash,
        reset_token_expires: { gt: new Date() },
      },
    });

    if (!user) {
      throw new BadRequestException('Invalid or expired reset link. Request a new one.');
    }

    const password_hash = await bcrypt.hash(password, 10);
    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        password_hash,
        reset_token_hash: null,
        reset_token_expires: null,
      },
    });

    return { message: 'Password updated successfully. You can sign in now.' };
  }

  private generateTokens(userId: number, email: string) {
    const accessToken = this.jwt.sign(
      { userId, email },
      { secret: process.env.JWT_SECRET, expiresIn: '15m' },
    );
    const refreshToken = this.jwt.sign(
      { userId, email },
      { secret: process.env.JWT_REFRESH_SECRET, expiresIn: '7d' },
    );
    return { accessToken, refreshToken };
  }
}
