// comics/comics.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreateComicDto } from '../dto/comic.dto';
import { ComicsService } from './comics.service';

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

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.comicsService.remove(id);
  }
}
