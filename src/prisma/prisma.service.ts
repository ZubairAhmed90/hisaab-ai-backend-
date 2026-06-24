import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  // Connect after listen on shared hosting (Prisma WASM is memory-heavy)
  async onModuleInit() {
    setTimeout(() => {
      void this.$connect().catch((e) =>
        console.warn('[Prisma] deferred connect failed:', e),
      );
    }, 500);
  }

  // Disconnect Prisma client when the app shuts down
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
