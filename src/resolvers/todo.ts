import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { ToDo } from "../entities/ToDo";

@Resolver()
export class ToDoResolver {
  @Query(() => [ToDo])
  async ToDos() {
    return await ToDo.find();
  }

  @Mutation(() => ToDo, { nullable: true })
  async createToDo(@Arg("task") task: string) {
    if (!task) {
      return null;
    }
    return await ToDo.create({ task }).save();
  }

  @Mutation(() => Boolean)
  async updateDone(
    @Arg("id", () => Int) id: number,
    @Arg("done") done: boolean
  ) {
    await ToDo.update({ id }, { done });
    return true;
  }
}
