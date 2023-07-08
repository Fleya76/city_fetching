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

  async searchCitiesByKeyword(args: PaginationArgs): Promise<CitiesPagination> {
    const qb = this.cityRepository.createQueryBuilder('city');
    qb.take(args.take);
    if (args.sortBy) {
      if (args.sortBy.nomCommune !== null) {
        qb.addOrderBy(
          'city.nomCommune',
          args.sortBy.nomCommune === SortDirection.ASC ? 'ASC' : 'DESC',
        );
      }
    }
    if (args.keyword) {
      qb.where('LOWER(city.nomCommune) LIKE LOWER(:keyword)', {
        keyword: `%${args.keyword}%`,
      });
    }
    const [nodes, totalCount] = await qb.getManyAndCount();
    return { nodes, totalCount };
  }
}
