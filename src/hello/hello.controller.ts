// podemos obtener el req, res de next
import {
  Controller,
  Get,
  Req,
  Res,
  HttpCode,
  Param,
  ParseIntPipe,
  ParseBoolPipe,
  Query,
  UseGuards
} from '@nestjs/common';
// importar datos desde express
import { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate_user/validate_user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('/')
export class HelloController {

  @Get()
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url)
    response.status(200).json({
      message: "Hello World"
    })
  }

  @Get('notFound')
  @HttpCode(404)
  pageNotFound() {
    return '404 Not Found'
  }

  @Get('ticket/:num')
  getTicket(@Param('num', ParseIntPipe) num: number) {
    return num + 10;
  }

  @Get('active/:status')
  getStatus(@Param('status', ParseBoolPipe) status: boolean) {
    return status;
  }

  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateUserPipe) query: {name: string, age: number}) {
    return `Hello ${query.name}, you are ${query.age} years old`;
  }

}
