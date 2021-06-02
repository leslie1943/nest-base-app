import {
  Controller,
  Get,
  HttpCode,
  Param,
  Query,
  Post,
  Req,
  Request,
  Delete,
} from '@nestjs/common';

import { CatService } from './cats.service';

type Cat = {
  name: string;
  id: number;
};

/**
 * In that case, we could specify the path prefix customers in the @Controller() decorator
 * so that we don't have to repeat that portion of the path for each route in the file.
 */
@Controller('cats') // prefix, could be any words
export class CatsController {
  constructor(private readonly catService: CatService) {}
  // the default route is [/prefix] if not specify route path
  @Get()
  findAll(): string {
    return this.catService.findAll();
  }

  // the route will be /prefix/specific-path if specify route path
  @Get('all')
  findCats(): string {
    return this.catService.findCats();
  }

  @Get('t*t')
  findWild(@Req() req: Request): string {
    return `this return ${req.url} `;
  }

  // @Query修饰的参数是 某个修饰器定义 url 后 带的 /query?name=222
  @Get('query')
  queryCat(@Query('name') name: string): string {
    return `this return ${name}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.info('id:', id);
    return `this action returns cat which id is ${id}`;
  }

  @Get('/findCatById/:id')
  findByCatId(@Param('id') id: number): Cat {
    return {
      id,
      name: 'Tom',
    };
  }

  @Post()
  @HttpCode(202)
  create(): string {
    return 'this action adds a new cat';
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `item ${id} this  has been deleted!`;
  }

  /**
   * 使用 @ 修识符的方法参数为 url 的形式和参数
   */
}
