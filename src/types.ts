export type User = {
  name: string;
  avatar: string;
  id: string;
  email: string;
};

export type Manga = {
  name: string;
  id: string;
  cover: string;
  description: string;
  tags: string[];
  chapters: Chapter[];
};

export type Chapter = {
  name: string;
  id: string;
  pages: string[];
};
