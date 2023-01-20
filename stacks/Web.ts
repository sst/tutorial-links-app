import { use, NextjsSite, StackContext } from "sst/constructs";
import { Api } from "./Api";

export function Web({ stack }: StackContext) {
  const api = use(Api);

  const site = new NextjsSite(stack, "site", {
    path: "next",
    environment: {
      NEXT_PUBLIC_GRAPHQL_URL: api.url + "/graphql",
    },
  });

  stack.addOutputs({
    SITE: site.url,
  });
}
