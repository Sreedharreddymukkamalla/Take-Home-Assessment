# Turborepo starter

This Turborepo starter is maintained by the Turborepo core team.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

# Take-Home Assessment

## Getting Started

This project contains both a NestJS backend and a Next.js frontend.

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Database

The backend uses a PostgreSQL database.  
**Make sure you have your database running and configured before starting the backend.**

- Configure your database connection in `apps/api/.env` or the appropriate config file.
- Example `.env` variables:
  ```
  DATABASE_URL=postgresql://user:password@localhost:5432/dbname
  ```

#### Seeding the Database

To populate the database with initial data, use the provided `seed.ts` script:

```bash
cd apps/api
npx ts-node seed.ts
or npm run seed
```

This will insert sample or required data into your database for development/testing.

### Install Dependencies

Install dependencies for both the backend (NestJS) and frontend (Next.js):

```bash
# Install backend dependencies
cd apps/api
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Running the Projects

#### Start both in turborepo 
In root folder rn the coommand
```bash
npm run dev
```

#### Start the NestJS Backend

```bash
cd apps/api
npm run start:dev
```

The backend will start on the default NestJS port (usually http://localhost:8080).

#### Start the Next.js Frontend

```bash
cd apps/frontend
npm run dev
```

The frontend will start on http://localhost:3000 (or another port if configured).

### Notes

- Make sure both backend and frontend are running for full functionality.
- Adjust ports, environment variables, and database settings as needed in the respective project folders.

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
