import { IsNotEmpty } from 'class-validator';

export class CreateComicDto {
  @IsNotEmpty()
  english_title: string;
  @IsNotEmpty()
  original_title: string;
  alternate_title: string;
  year_published: Date;
  status: string;
  read_chapter: number;
  total_chapter: number;
  personal_notes: string;
  image_url: string;
  last_update: Date;
  score_review: number;
  country_of_origin: string;
  author: string;
  synopsis: string;
}
