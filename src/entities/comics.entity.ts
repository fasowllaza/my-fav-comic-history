import { Table, Column, Model, PrimaryKey, DataType, AutoIncrement } from 'sequelize-typescript';

@Table
export class Comic extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  comic_id: number;

  @Column(DataType.STRING(128))
  english_name: string;


  @Column(DataType.STRING(128))
  original_name: string;

  @Column(DataType.STRING(128))
  alternate_name: string;

  @Column(DataType.DATE)
  year_published: Date;

  @Column(DataType.STRING(32))
  status: string;

  @Column(DataType.NUMBER)
  read_chapter: number;

  @Column(DataType.NUMBER)
  total_chapter: number;

  @Column(DataType.STRING())
  personal_notes: string;

  @Column(DataType.STRING())
  image_url: string;

  @Column(DataType.DATE)
  last_update: Date;

  @Column(DataType.NUMBER)
  score_review: number;

  @Column(DataType.STRING(64))
  country_of_origin: string;
}
