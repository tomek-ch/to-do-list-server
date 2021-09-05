import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { ToDo } from "../entities/ToDo";

@Resolver()
export class ToDoResolver {
  @Query(() => [ToDo])
  async ToDos() {
    return await ToDo.find();
  }

  @Mutation(() => ToDo)
  async createToDo(@Arg("task") task: string) {
    return await ToDo.create({ task }).save();
  }
}
