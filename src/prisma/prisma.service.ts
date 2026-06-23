import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  // Connect Prisma client when the module starts
  async onModuleInit() {
    await this.$connect();
  }

  // Disconnect Prisma client when the app shuts down
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
