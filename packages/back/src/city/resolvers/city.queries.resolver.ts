import { Args, Query, Resolver } from '@nestjs/graphql';
import { CityService } from '../city.service';
import { CitiesPagination, PaginationArgs } from '../dto/cities.dto';
import { City } from '../models/city.model';

@Resolver(City)
export class CityQueriesResolver {
  constructor(private readonly cityService: CityService) {}

  @Query(() => CitiesPagination)
  async searchCitiesByKeyword(@Args() args: PaginationArgs) {
    return this.cityService.searchCitiesByKeyword(args);
  }
}
