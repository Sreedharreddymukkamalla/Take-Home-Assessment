import { DataSource, DataSourceOptions } from 'typeorm';
import { Client } from './entities/client.entity';
import { seedClients } from '../data/mockClients';

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: parseInt(process.env.DB_PORT ?? '5432', 10),
  username: process.env.DB_USERNAME ?? 'postgres',
  password: process.env.DB_PASSWORD ?? 'password',
  database: process.env.DB_DATABASE ?? 'client',
  entities: [Client],
  synchronize: true, 
};

const AppDataSource = new DataSource(dataSourceOptions);

async function seed() {
  await AppDataSource.initialize();
  const repo = AppDataSource.getRepository(Client);
  for (const c of seedClients) {
    const client = repo.create(c);
    await repo.save(client);
  }
  console.log('Seeded clients!');
  await AppDataSource.destroy();
}

seed().catch((e: unknown) => {
  if (e instanceof Error) {
    console.error(e.message, e.stack);
  } else {
    console.error(e);
  }
  process.exit(1);
});