export * as Article from "./article";

import { ulid } from "ulid";
import { SQL } from "./sql";

export async function create(title: string, url: string) {
  const [result] = await SQL.DB.insertInto("article")
    .values({ articleID: ulid(), url, title })
    .returningAll()
    .execute();
  return result;
}

export function get(articleID: string) {
  return SQL.DB.selectFrom("article")
    .selectAll()
    .where("articleID", "=", articleID)
    .executeTakeFirst();
}

export function list() {
  return SQL.DB.selectFrom("article")
    .selectAll()
    .orderBy("created", "desc")
    .execute();
}

export function addComment(articleID: string, text: string) {
  return SQL.DB.insertInto("comment")
    .values({
      commentID: ulid(),
      articleID,
      text,
    })
    .returningAll()
    .executeTakeFirstOrThrow();
}

export function comments(articleID: string) {
  return SQL.DB.selectFrom("comment")
    .selectAll()
    .where("articleID", "=", articleID)
    .execute();
}