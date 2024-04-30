import { Comic } from './entities/comics.entity';
import { Tag } from './entities/tags.entity';

export const AppProvider = [
  {
    provide: 'COMICS_REPOSITORY',
    useValue: Comic,
  },
  {
    provide: 'TAGS_REPOSITORY',
    useValue: Tag,
  },
];
