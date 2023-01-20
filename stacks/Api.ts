import { use, StackContext, Api as ApiGateway } from "sst/constructs";
import { Database } from "./Database";

export function Api({ stack }: StackContext) {
  const rds = use(Database);

  const api = new ApiGateway(stack, "api", {
    defaults: {
      function: {
        bind: [rds],
      },
    },
    routes: {
      "POST /graphql": {
        type: "graphql",
        function: {
          handler: "services/functions/graphql/graphql.handler",
        },
        pothos: {
          schema: "services/functions/graphql/schema.ts",
          output: "graphql/schema.graphql",
          commands: [
            "cd graphql && pnpm genql --output ./genql --schema ./schema.graphql --esm",
          ],
        },
      },
    },
  });

  stack.addOutputs({
    API: api.url,
  });

  return api;
}
