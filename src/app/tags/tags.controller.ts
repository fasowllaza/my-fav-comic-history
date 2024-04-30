// comics/comics.controller.ts

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
// import { CreateComicDto } from '../dto/comic.dto';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  async findAll() {
    return this.tagsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.tagsService.findOne(id);
  }
}
