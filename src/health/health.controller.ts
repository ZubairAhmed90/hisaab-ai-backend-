import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ok } from '../common/response.dto';
import { HealthService } from './health.service';

@ApiTags('health')
@Controller()
export class HealthController {
  constructor(private healthService: HealthService) {}

  /** API root — confirms this is the HisaabAI backend. */
  @Get()
  @ApiOperation({ summary: 'API root' })
  root() {
    return ok({
      service: 'hisaabai-backend',
      health: '/api/v1/health',
      ready: '/api/v1/health/ready',
    });
  }

  /** Liveness — server is up (no auth). Use for cPanel / uptime monitors. */
  @Get('health')
  @ApiOperation({ summary: 'API liveness check' })
  check() {
    return ok(this.healthService.liveness());
  }

  /** Readiness — server + database (no auth). */
  @Get('health/ready')
  @ApiOperation({ summary: 'API readiness check (includes database)' })
  async ready() {
    return ok(await this.healthService.readiness());
  }
}
