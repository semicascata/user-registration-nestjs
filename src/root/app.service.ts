import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string } {
    return {
      message: 'User Registration | Job Challange - DG Solutions | Raul D.',
    };
  }
}
