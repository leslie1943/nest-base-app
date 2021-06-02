import {
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Req,
  Request,
  //   Res,
  //   Response,
} from '@nestjs/common';

/**
 * In that case, we could specify the path prefix customers in the @Controller() decorator
 * so that we don't have to repeat that portion of the path for each route in the file.
 */
@Controller('cats') // prefix, could be any words
export class CatsController {
  // the default route is [/prefix] if not specify route path
  @Get()
  findAll(@Req() request: Request): string {
    console.info(request.method);
    console.info(request);
    return 'this action returns all cats';
  }

  // the route will be /prefix/specific-path if specify route path
  @Get('all')
  findCats(@Request() request: Request): string {
    console.info(request.method);
    return 'this action returns findCats cats';
  }

  @Get('t*t')
  findWild(@Req() req: Request /** @Res() res: Response */): string {
    return `this return ${req.url} `;
  }

  @Get(':id')
  findOne(@Req() request: Request, @Param() params): string {
    console.info(request.method);
    console.info(params);
    console.info(params);
    return `this action returns cat which id is ${params.id}`;
  }

  @Post()
  @HttpCode(202)
  create(): string {
    return 'this action adds a new cat';
  }
}
