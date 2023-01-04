import { App } from "sst/constructs";
import { Api } from "./Api";
import { Web } from "./Web";
import { Database } from "./Database";

export default function main(app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    nodejs: {
      format: "esm",
    },
  });
  app
    .stack(Database)
    .stack(Api)
    .stack(Web);
}
