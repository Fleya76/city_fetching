import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class City {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    codeCommune: string;

    @Field(() => String)
    @Column()
    codePostal: string;

    @Field(() => String)
    @Column()
    libelleAcheminement: string;

    @Field(() => String)
    @Column()
    nomCommune: string;
}
