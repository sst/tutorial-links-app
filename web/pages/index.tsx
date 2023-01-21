import Link from "next/link";
import { useMemo } from "react";
import { useTypedQuery } from "@my-sst-app/graphql/urql";
import Empty from "../components/Empty";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import styles from "../styles/Home.module.css";

export default function Home() {
  // Handle empty document cache
  // https://formidable.com/open-source/urql/docs/basics/document-caching/#adding-typenames
  const context = useMemo(
    () => ({ additionalTypenames: ["Article", "Comments"] }),
    []
  );
  const [articles] = useTypedQuery({
    query: {
      articles: {
        id: true,
        url: true,
        title: true,
        comments: {
          id: true,
        },
      },
    },
    context,
  });

  return (
    <div>
      <Navbar />
      {articles.fetching ? (
        <Loading />
      ) : articles.data?.articles && articles.data?.articles.length > 0 ? (
        <ol className={styles.list}>
          {articles.data?.articles.map((article) => (
            <li key={article.id} className={styles.article}>
              <div>
                <h2 className={styles.title}>
                  <Link href={`/article/${article.id}`}>{article.title}</Link>
                </h2>
                &nbsp;
                <a target="_blank" href={article.url} className={styles.url}>
                  ({article.url.replace(/(^\w+:|^)\/\//, "")})
                </a>
              </div>
              <div className={styles.footer}>
                <strong>{article.comments.length}</strong>
                <span className={styles.footerSeparator}>&bull;</span>
                <Link href={`/article/${article.id}`}>View Comments</Link>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <Empty>&#10024; Post the first link &#10024;</Empty>
      )}
    </div>
  );
}
