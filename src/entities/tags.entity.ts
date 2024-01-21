import { Table, Column, Model, PrimaryKey, DataType, BelongsToMany, AutoIncrement } from 'sequelize-typescript';
import { Comic } from './comics.entity';
import { ComicTag } from './comic-tags.entity';

@Table
export class Tag extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  tag_id: number;

  @Column(DataType.STRING(50))
  name: string;

  @BelongsToMany(() => Comic, () => ComicTag)
  comics: Comic[];
}