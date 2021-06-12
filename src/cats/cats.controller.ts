import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Cat } from 'src/cats/interfaces/cat.interface';

import { CreateCatDto, UpdateCatDto, QueryCatParams } from './dto/cat.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  /**
   * CatsService 是通过类构造函数注入的,注意这里使用了私有的只读语法
   * 这意味着我们已经在同一位置创建并初始化了 catsService 成员
   * 构造函数会根据传递的类型去 `app.module.ts` 中的 providers 里面 找到对应的 类型 然后初始化 this
   */
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createDto: CreateCatDto): Promise<void> {
    console.info(createDto);
    this.catsService.create(createDto);
  }

  @Get()
  async findAll(@Query() query: QueryCatParams): Promise<Cat[]> {
    console.info(query);
    return this.catsService.findCats();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<string> {
    console.info(id);
    return id;
  }

  @Put(':name')
  async update(@Param('name') name: string, @Body() updateInfo: UpdateCatDto): Promise<void> {
    console.info(name);
    console.info(updateInfo);
    return this.catsService.update(name, updateInfo);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    console.info(id);
  }
}
