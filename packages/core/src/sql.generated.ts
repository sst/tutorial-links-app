import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface Article {
  articleID: string;
  title: string;
  url: string;
  created: Generated<Timestamp>;
}

export interface Comment {
  commentID: string;
  articleID: string;
  text: string;
}

export interface Database {
  article: Article;
  comment: Comment;
}
