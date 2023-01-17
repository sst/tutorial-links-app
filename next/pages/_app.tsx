import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Provider as UrqlProvider, createClient } from "urql";
import { Roboto_Slab, Source_Sans_Pro, Source_Code_Pro } from "@next/font/google";

const roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});
const sans = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});
const code = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const urql = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHQL_URL || "",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
      <UrqlProvider value={urql}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>SST App</title>
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="white"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="hsl(216, 13%, 16%)"
          />
          <link rel="icon" href="/favicon.svg" />
          <meta property="og:image" content="/share.png" />
          <meta name="description" content="Built with SST" />
        </Head>
        <style jsx global>{`
          :root {
            --font-body: ${sans.style.fontFamily};
            --font-code: ${code.style.fontFamily};
            --font-heading: ${roboto.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </UrqlProvider>
  );
}
