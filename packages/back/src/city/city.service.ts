import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './models/city.model';
import {
  CitiesPagination,
  PaginationArgs,
  SortDirection,
} from './dto/cities.dto';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}

  /**
   * Description: A service function used by the GraphQL resolver to search in the database with TypeORM all cities filtered by arguments.
   * @param args
   */
  async searchCitiesByArgs(args: PaginationArgs): Promise<CitiesPagination> {
    const qb = this.cityRepository.createQueryBuilder('city');
    qb.take(args.take);
    if (args.sortBy) {
      if (args.sortBy.nomCommune !== null) {
        qb.addOrderBy(
          `CASE WHEN city.codePostal LIKE '971%' THEN 1
              WHEN city.codePostal LIKE '972%' THEN 2
              WHEN city.codePostal LIKE '973%' THEN 3
              WHEN city.codePostal LIKE '974%' THEN 4
              WHEN city.codePostal LIKE '976%' THEN 5
              ELSE 6
         END`,
          'ASC',
        );
        qb.addOrderBy(
          'city.nomCommune',
          args.sortBy.nomCommune === SortDirection.ASC ? 'ASC' : 'DESC',
        );
      }
    }
    if (args.nomCommune) {
      qb.where('LOWER(city.nomCommune) LIKE LOWER(:nomCommune)', {
        nomCommune: `%${args.nomCommune}%`,
      });
    } else if (args.codePostal) {
      qb.where('LOWER(city.codePostal) LIKE LOWER(:codePostal)', {
        codePostal: `%${args.codePostal}%`,
      });
    }
    const [nodes, totalCount] = await qb.getManyAndCount();
    return { nodes, totalCount };
  }
}
