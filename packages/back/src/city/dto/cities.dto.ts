import {
  ArgsType,
  Field,
  InputType,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { City } from '../models/city.model';

export enum SortDirection {
  ASC,
  DESC,
}

registerEnumType(SortDirection, {
  name: 'SortDirection',
});

@InputType()
export class CitiesPaginationSortBy {
  @Field(() => SortDirection, { nullable: true })
  nomCommune?: SortDirection;
}

/**
 * Description: DTO of the arguments take by the GraphQL query.
 * Payload: `take` is used to define the return number of elements, `sortBy` is used to sort by asc or desc the city name. `codePostal` and `nomCommune` is a City properties.
 */
@ArgsType()
export class PaginationArgs {
  @Field(() => Int)
  take: number;

  @Field(() => Int, { nullable: true })
  codePostal?: number;

  @Field(() => String, { nullable: true })
  nomCommune?: string;

  @Field(() => CitiesPaginationSortBy, { nullable: true })
  sortBy?: CitiesPaginationSortBy;
}

@ObjectType()
export class CitiesPagination {
  @Field(() => [City])
  nodes: City[];

  @Field()
  totalCount: number;
}
