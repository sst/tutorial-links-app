# Tutorial Links App

Source for the _Links_ app that we build in the SST tutorial — [docs.sst.dev/learn](https://docs.sst.dev/learn)

[![Links app screenshot](https://github.com/serverless-stack/tutorial-links-app/raw/master/screenshot.png)](https://docs.sst.dev/learn)

---

It's a simple Reddit clone built using:

- [SST](https://sst.dev)
- PostgreSQL
- GraphQL
- React

Written in TypeScript and deployed to AWS.

## Usage

Clone this repo.

```bash
$ git clone https://github.com/serverless-stack/tutorial-links-app
```

Install dependencies.

```bash
$ npm install
```

### Developing Locally

Start the [Live Lambda Dev Environment](https://docs.sst.dev/live-lambda-development).

```bash
$ npx sst start
```

Start the React local dev environment from the `web/` dir.

```bash
$ cd web
$ npm run dev
```

### Deploying to Prod

Run this in the project root to deploy it to prod.

```bash
$ npx sst deploy --stage prod
```

---

Join the SST community over on [Discord](https://discord.gg/sst) and follow us on [Twitter](https://twitter.com/SST_dev).
