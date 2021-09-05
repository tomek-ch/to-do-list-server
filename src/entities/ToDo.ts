import { Field, ObjectType } from "type-graphql";
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@ObjectType()
@Entity()
export class ToDo extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  task!: string;

  @Field()
  @Column()
  done!: boolean;
}
