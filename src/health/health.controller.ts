import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ok } from '../common/response.dto';
import { HealthService } from './health.service';

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(private healthService: HealthService) {}

  /** Liveness — server is up (no auth). Use for cPanel / uptime monitors. */
  @Get()
  @ApiOperation({ summary: 'API liveness check' })
  check() {
    return ok(this.healthService.liveness());
  }

  /** Readiness — server + database (no auth). */
  @Get('ready')
  @ApiOperation({ summary: 'API readiness check (includes database)' })
  async ready() {
    return ok(await this.healthService.readiness());
  }
}
