import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/v1/usreg')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { message: string } {
    return this.appService.getHello();
  }
}
