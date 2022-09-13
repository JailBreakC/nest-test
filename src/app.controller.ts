import { Body, Controller, Get, Param, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { ParamCheckPipe } from './param-check.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:id')
  @UsePipes(ParamCheckPipe)
  getHello(@Param('id') param: number, @Body() body: any): number {
    console.log('getHello');
    // console.log({ param, body });
    this.appService.getHello();
    return body;
  }
}
