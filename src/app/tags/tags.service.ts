// comics/comics.service.ts

import { Injectable, Inject } from '@nestjs/common';
import { Tag } from 'src/entities/tags.entity';

@Injectable()
export class TagsService {
  constructor(
    @Inject('TAGS_REPOSITORY')
    private tagsRepository: typeof Tag,
  ) {}
  async findAll(): Promise<Tag[]> {
    return this.tagsRepository.findAll();
  }

  async findOne(id: number): Promise<Tag> {
    return this.tagsRepository.findByPk(id);
  }
}
