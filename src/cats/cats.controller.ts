import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CatDto } from 'src/cats/interfaces/cats.dto';
import { Cat } from './cats.entity';
import { CatRepository, CatRefRepository } from './cats.repository';
@Controller('cats')
export class CatsController {
  /**
   *  use the repository in the controller
   *    1. to use the repository, you need to inject the dependencies in the controller.
   *       To do so, add these lines at the beginning of the class with the related imports.
   */
  constructor(
    @InjectRepository(CatRepository)
    private readonly catRepository: CatRepository,
    @InjectRepository(CatRefRepository)
    private readonly catRefRepository: CatRefRepository,
  ) {}

  @Post()
  async create(@Body() createDto: CatDto): Promise<CatDto> {
    // 先使用 A Repository 操作数据
    const newCat = await this.catRepository.createCat(createDto);

    // 获取返回值后再操作关联表数据
    this.catRefRepository.createCatRef({ name: newCat.name, cat: newCat });

    // 返回数据
    return newCat;
  }

  @Get()
  async findAll(@Query() query: CatDto) {
    console.info(query);
    return this.catRepository.findAllCat();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Cat> {
    return this.catRepository.findById(id);
  }

  @Put(':name')
  async update(
    @Param('name') name: string,
    @Body() updateInfo: CatDto,
  ): Promise<void> {
    console.info(name);
    console.info(updateInfo);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    console.info(id);
  }

  @Get()
  async forJest() {
    return 'Jest';
  }
}
