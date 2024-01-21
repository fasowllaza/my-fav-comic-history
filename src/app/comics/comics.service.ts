// comics/comics.service.ts

import { Injectable, Inject } from '@nestjs/common';
import { Comic } from 'src/entities/comics.entity';
import { CreateComicDto } from '../dto/comic.dto';

@Injectable()
export class ComicsService {
  constructor(
    @Inject('COMICS_REPOSITORY')
    private comicsRepository: typeof Comic
  ) {}
  async findAll(): Promise<Comic[]> {
    return this.comicsRepository.findAll();
  }

  async findOne(id: number): Promise<Comic> {
    return this.comicsRepository.findByPk(id);
  }

  async create(createComicDto: CreateComicDto): Promise<Comic> {
    const comicData = { ...createComicDto } as any
    return this.comicsRepository.create(comicData);
  }

  async remove(id: number): Promise<number> {
    const result = await this.comicsRepository.destroy({ where: { comic_id: id } });
    return result;
  }
}
