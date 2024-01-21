// comics/comics.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comic } from 'src/entities/comics.entity';
import { CreateComicDto, UpdateComicDto } from './dto/comic.dto';

@Injectable()
export class ComicsService {
  constructor(
    @InjectModel(Comic)
    private readonly comicModel: typeof Comic,
  ) {}

  async findAll(): Promise<Comic[]> {
    return this.comicModel.findAll();
  }

  async findOne(id: number): Promise<Comic> {
    return this.comicModel.findByPk(id);
  }

  async create(createComicDto: CreateComicDto): Promise<Comic> {
    return this.comicModel.create(createComicDto);
  }

  async update(id: number, updateComicDto: UpdateComicDto): Promise<[number, Comic[]]> {
    return this.comicModel.update(updateComicDto, { where: { comic_id: id } });
  }

  async remove(id: number): Promise<number> {
    const result = await this.comicModel.destroy({ where: { comic_id: id } });
    return result;
  }
}
