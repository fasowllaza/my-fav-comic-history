export class CreateComicDto {
    title: string;
    author: string;
    releaseDate: Date;
    genre: string;
    pageCount: number;
    synopsis: string;
  }
  
export class UpdateComicDto {
    title?: string;
    author?: string;
    releaseDate?: Date;
    genre?: string;
    pageCount?: number;
    synopsis?: string;
  }
  