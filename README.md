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
# Install backend and frontend dependencies using
npm install
```

Verify the nodemodules for each folder (i.e api and frontend)

### Running the Projects

#### Start both in turborepo 
In root folder rn the coommand
```bash
npm run dev
```
This will run both the services in a single terminal

#### If you want to run them induvidually
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

### For running backend tests 


```bash
cd apps/api
npm run test
```
