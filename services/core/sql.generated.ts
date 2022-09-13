import { ColumnType,  RawBuilder } from 'kysely';

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Timestamp = ColumnType<Date | RawBuilder, Date | string | RawBuilder, Date | string | RawBuilder>;

export interface Article {
  articleID: string;
  created: Generated<Timestamp | null>;
  title: string;
  url: string;
}

export interface Comment {
  articleID: string;
  commentID: string;
  text: string;
}

export interface Database {
  article: Article;
  comment: Comment;
}
