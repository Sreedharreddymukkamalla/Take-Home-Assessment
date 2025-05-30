import {
  Controller,
  Get,
  Query,
  Param,
  ParseIntPipe,
  NotFoundException,
  Delete,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { QueryClientDto } from './dto/query-client.dto';
import { Client } from './entities/client.entity';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async findAll(@Query() q: QueryClientDto): Promise<Client[]> {
    return await this.clientService.findAll(q);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Client> {
    const client = await this.clientService.findOne(id);
    if (!client) {
      throw new NotFoundException(`Client #${id} not found`);
    }
    return client;
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
    const deleted = await this.clientService.remove(id);
    if (!deleted) {
      throw new NotFoundException(`Client #${id} not found`);
    }
    return { message: `Client #${id} deleted` };
  }
}
