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
