import { Test, TestingModule } from '@nestjs/testing';
import { CityService } from './city.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './models/city.model';

const cityRepositoryMock = {
  createQueryBuilder: jest.fn(() => ({
    take: jest.fn().mockReturnThis(),
    addOrderBy: jest.fn().mockReturnThis(),
    where: jest.fn().mockReturnThis(),
    getManyAndCount: jest.fn().mockReturnValue([
      [
        /* mock data */
      ] /* mock count */,
    ]),
  })),
};

// TODO: WIP, need more time to do that :'(
describe('CityService', () => {
  let service: CityService;
  let cityRepository: Repository<City>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CityService,
        {
          provide: getRepositoryToken(City),
          useValue: cityRepositoryMock,
        },
      ],
    }).compile();

    service = module.get<CityService>(CityService);
    cityRepository = module.get<Repository<City>>(getRepositoryToken(City));
  });

  describe('searchCitiesByArgs', () => {
    it('should search cities by arguments', async () => {
      const args = {
        take: 10,
        nomCommune: 'Paris',
      };

      await service.searchCitiesByArgs(args);
      expect(cityRepository.createQueryBuilder).toHaveBeenCalledWith('city');
    });
  });
});
