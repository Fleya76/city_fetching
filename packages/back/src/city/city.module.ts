import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityService } from './city.service';
import { City } from './models/city.model';
import { CityQueriesResolver } from './resolvers/city.queries.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([City])],
    providers: [
        CityService,
        CityQueriesResolver,
    ],
    exports: [CityService],
})
export class CityModule {}
