import { Test, TestingModule } from '@nestjs/testing';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { NotFoundException } from '@nestjs/common';
import { seedClients } from '../data/mockClients';

describe('ClientController', () => {
  let controller: ClientController;
  let service: ClientService;

  const mockClientService = {
    findAll: jest.fn().mockResolvedValue(seedClients),
    findOne: jest.fn((id: number) =>
      Promise.resolve(seedClients.find(client => client.id === id) || null)
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientController],
      providers: [
        { provide: ClientService, useValue: mockClientService },
      ],
    }).compile();

    controller = module.get<ClientController>(ClientController);
    service = module.get<ClientService>(ClientService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return all mock clients', async () => {
      const result = await controller.findAll({});
      expect(result).toEqual(seedClients);
      expect(service.findAll).toHaveBeenCalledWith({});
    });

    it('should call service.findAll with name params', async () => {
      const query = { name: 'Alice' };
      await controller.findAll(query);
      expect(service.findAll).toHaveBeenCalledWith(query);
    });

    it('should call service.findAll with birthday query', async () => {
      const query = { birthday: '1990-01-01' };
      await controller.findAll(query);
      expect(service.findAll).toHaveBeenCalledWith(query);
    });

    it('should call service.findAll with type query', async () => {
      const query = { accountType: 'Checking' };
      await controller.findAll(query);
      expect(service.findAll).toHaveBeenCalledWith(query);
    });

    it('should call service.findAll with all query params', async () => {
      const query = { name: 'Alice', birthday: '1990-01-01', type: 'premium' };
      await controller.findAll(query);
      expect(service.findAll).toHaveBeenCalledWith(query);
    });
  });

  describe('findOne', () => {
    it('should return a client by id', async () => {
      const result = await controller.findOne(1);
      expect(result).toEqual(seedClients[0]);
      expect(service.findOne).toHaveBeenCalledWith(1);
    });

    it('should throw NotFoundException if client not found', async () => {
      await expect(controller.findOne(999)).rejects.toThrow(NotFoundException);
    });

    it('should handle service errors gracefully', async () => {
      jest.spyOn(service, 'findOne').mockRejectedValueOnce(new Error('Unexpected error'));
      await expect(controller.findOne(2)).rejects.toThrow(Error);
    });
  });
});
