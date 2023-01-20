import { useMemo } from "react";
import { useRouter } from "next/router";
import { useTypedQuery, useTypedMutation } from "@my-sst-app/graphql/urql";
import Button from "../../components/Button";
import Empty from "../../components/Empty";
import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";
import styles from "../../styles/Article.module.css";

interface CommentForm {
  text: string;
  articleID: string;
}

export default function Article() {
  const router = useRouter();
  const id = router.query.id as string;

  // Handle empty document cache
  // https://formidable.com/open-source/urql/docs/basics/document-caching/#adding-typenames
  const context = useMemo(() => ({ additionalTypenames: ["Comment"] }), []);
  const [article] = useTypedQuery({
    query: {
      article: [
        { articleID: id },
        {
          id: true,
          url: true,
          title: true,
          comments: {
            id: true,
            text: true,
          },
        },
      ],
    },
    context,
  });

  const [result, addComment] = useTypedMutation((opts: CommentForm) => ({
    addComment: [
      {
        text: opts.text,
        articleID: opts.articleID,
      },
      {
        id: true,
      },
    ],
  }));

  return (
    <div>
      <Navbar />
      {article.fetching ? (
        <Loading />
      ) : article.data?.article ? (
        <div className={styles.article}>
          <h1>{article.data.article.title}</h1>
          <p>
            <a target="_blank" href={article.data.article.url}>
              {article.data.article.url}
            </a>
          </p>
          <ol className={styles.comments}>
            {article.data.article.comments?.map((comment) => (
              <li key={comment.id} className={styles.comment}>
                {comment.text}
              </li>
            ))}
          </ol>
          <form
            className={styles.form}
            onSubmit={async (e) => {
              e.preventDefault();

              const fd = new FormData(e.currentTarget);
              const text = fd.get("text")!.toString();

              e.currentTarget.reset();

              text.length > 0 &&
                (await addComment({
                  text,
                  articleID: id,
                }));
            }}
          >
            <textarea name="text" className={styles.field}></textarea>
            <Button
              type="submit"
              variant="secondary"
              className={styles.button}
              loading={result.fetching || article.stale}
            >
              Add Comment
            </Button>
          </form>
        </div>
      ) : (
        <Empty>Not Found</Empty>
      )}
    </div>
  );
}
