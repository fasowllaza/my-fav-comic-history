// comic-tag.model.ts
import { Table, Column, Model, ForeignKey, DataType, BelongsTo } from 'sequelize-typescript';
import { Comic } from './comics.entity';
import { Tag } from './tags.entity';

@Table
export class ComicTag extends Model {
  @ForeignKey(() => Comic)
  @Column(DataType.INTEGER)
  comic_id: number;

  @ForeignKey(() => Tag)
  @Column(DataType.INTEGER)
  tag_id: number;

  @BelongsTo(() => Comic)
  comic: Comic;

  @BelongsTo(() => Tag)
  tag: Tag;
}