import { SSTConfig } from "sst";
import { Api } from "./stacks/Api";
import { Web } from "./stacks/Web";
import { Database } from "./stacks/Database";

export default {
  config(input) {
    return {
      name: "my-sst-app",
      region: "us-east-1",
    }
  },
  stacks(app) {
    //TODO: Remove after Node16 is made default
    app.setDefaultFunctionProps({
      runtime: "nodejs16.x",
    });

    app
      .stack(Database)
      .stack(Api)
      .stack(Web);
  },
} satisfies SSTConfig;