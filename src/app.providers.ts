import { Comic } from "./entities/comics.entity";

export const AppProvider = [
    {
        provide: 'COMICS_REPOSITORY',
        useValue: Comic
    }
];