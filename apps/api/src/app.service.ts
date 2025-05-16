import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHealth(): string {
    return 'System healthy';
  }

  getStatus(): string {
    return 'Service is up';
  }
}