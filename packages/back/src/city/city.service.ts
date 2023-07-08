import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { City } from './models/city.model';
import { CitiesPagination, CitiesPaginationArgs, SortDirection} from "./dto/cities.dto";

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(City)
        private readonly cityRepository: Repository<City>,
    ) {}

    async searchCitiesByKeyword(keyword: string): Promise<City[]> {
        return this.cityRepository.find({
            where: {
                nomCommune: ILike(`%${keyword}%`),
            },
        });
    }

    async citiesPagination(
        args: CitiesPaginationArgs,
    ): Promise<CitiesPagination> {
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
        const [nodes, totalCount] = await qb.getManyAndCount();
        return { nodes, totalCount };
    }
}
