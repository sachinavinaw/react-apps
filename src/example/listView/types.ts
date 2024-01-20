type Article = {
  slug: string;
  title: string;
  description: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
};

export default Article;

export type Books = {
  key: string;
  type: string;
  title_short: string;
  title_sort: string;
  title_suggest: string;
  edition_count: number;
  first_publish_year: number;
  number_of_pages_median: number;
  language: string[];
  author_key: string[];
  author_name: string[];
  subject: string[];
  ratings_count: number;
  ratings_count_1: number;
  ratings_count_2: number;
  ratings_count_3: number;
  ratings_count_4: number;
  ratings_count_5: number;
};
