import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HealthService {
  constructor(private prisma: PrismaService) {}

  liveness() {
    return {
      status: 'ok',
      service: 'hisaabai-backend',
      version: process.env.npm_package_version || '1.0.0',
      uptimeSeconds: Math.floor(process.uptime()),
      timestamp: new Date().toISOString(),
    };
  }

  async readiness() {
    const base = this.liveness();
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return { ...base, database: 'connected' };
    } catch {
      return { ...base, status: 'degraded', database: 'unavailable' };
    }
  }
}
