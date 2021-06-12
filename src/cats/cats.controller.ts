import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CatDto } from 'src/cats/interfaces/cats.dto';
import { CatRepository } from './cats.repository';
@Controller('cats')
export class CatsController {
  /**
   *  use the repository in the controller
   *    1. to use the repository, you need to inject the dependencies in the controller.
   *       To do so, add these lines at the beginning of the class with the related imports.
   */
  constructor(@InjectRepository(CatRepository) private readonly catRepository: CatRepository) {}

  @Post()
  async create(@Body() createDto: CatDto): Promise<CatDto> {
    return this.catRepository.createCat(createDto);
  }

  @Get()
  async findAll(@Query() query: CatDto) {
    console.info(query);
    return this.catRepository.findAllCat();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<string> {
    console.info(id);
    return id;
  }

  @Put(':name')
  async update(@Param('name') name: string, @Body() updateInfo: CatDto): Promise<void> {
    console.info(name);
    console.info(updateInfo);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    console.info(id);
  }
}
