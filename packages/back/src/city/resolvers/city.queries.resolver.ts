import { Args, Query, Resolver } from '@nestjs/graphql';
import { CityService } from '../city.service';
import { CitiesPagination, PaginationArgs } from '../dto/cities.dto';
import { City } from '../models/city.model';

@Resolver(City)
export class CityQueriesResolver {
  constructor(private readonly cityService: CityService) {}

  /**
   * Description: A resolver function to use GraphQL in the city service.
   * @param args
   */
  @Query(() => CitiesPagination)
  async searchCitiesByArgs(@Args() args: PaginationArgs) {
    return this.cityService.searchCitiesByArgs(args);
  }
}
