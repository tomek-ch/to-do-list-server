import { Resolver, Query } from "type-graphql";
import { ToDo } from "../entities/ToDo";

@Resolver()
export class ToDoResolver {
  @Query(() => [ToDo])
  async ToDos() {
    return await ToDo.find();
  }
}
