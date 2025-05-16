import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { QueryClientDto } from './dto/query-client.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  findAll(query: QueryClientDto): Promise<Client[]> {
    const qb = this.clientRepository.createQueryBuilder('client');
    if (query.name) {
      qb.andWhere('client.name ILIKE :name', { name: `%${query.name}%` });
    }
    if (query.birthday) {
      qb.andWhere('client.birthday = :birthday', { birthday: query.birthday });
    }
    if (query.accountType) {
      qb.andWhere('client.accountType = :accountType', { accountType: query.accountType });
    }
    return qb.getMany();
  }

  async findOne(id: number): Promise<Client | null> {
    return this.clientRepository.findOneBy({ id });
  }
}
