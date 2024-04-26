import {Manga} from '@/types.ts'

export type UserFavorites = {
    count: number;
    favoritesList: Array<Manga>;
    finishedChapters: number;
}