import { Args, Query, Resolver } from '@nestjs/graphql';
import { CityService } from '../city.service';
import {
    CitiesPagination,
    CitiesPaginationArgs,
} from '../dto/cities.dto';
import { City } from '../models/city.model';

@Resolver(City)
export class CityQueriesResolver {
    constructor(private readonly cityService: CityService) {}

    @Query(() => CitiesPagination)
    async cities(@Args() args: CitiesPaginationArgs) {
        return this.cityService.citiesPagination(args);
    }
}
