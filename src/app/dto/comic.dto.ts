export class CreateComicDto {
    english_name: string;
    original_name: string;
    alternate_name: string;
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