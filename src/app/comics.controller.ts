// comics/comics.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ComicsService } from './dto/comics.service';
import { CreateComicDto, UpdateComicDto } from './dto/comic.dto';

@Controller('comics')
export class ComicsController {
  constructor(private readonly comicsService: ComicsService) {}

  @Get()
  async findAll() {
    return this.comicsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.comicsService.findOne(id);
  }

  @Post()
  async create(@Body() createComicDto: CreateComicDto) {
    return this.comicsService.create(createComicDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateComicDto: UpdateComicDto) {
    return this.comicsService.update(id, updateComicDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.comicsService.remove(id);
  }
}
