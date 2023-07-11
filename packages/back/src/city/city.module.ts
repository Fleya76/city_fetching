import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityService } from './city.service';
import { City } from './models/city.model';
import { CityQueriesResolver } from './resolvers/city.queries.resolver';

/**
 * Description: A module to search and find cities by arguments with GraphQL and TypeORM.
 */
@Module({
  imports: [TypeOrmModule.forFeature([City])],
  providers: [CityService, CityQueriesResolver],
  exports: [CityService],
})
export class CityModule {}
