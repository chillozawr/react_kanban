import { TODO_STATUS_TYPES } from "../constants";

class TodosFactory {
  static fromResponseDto(dto) {
    return dto.map((todo) => {
      return {
        id: todo.id,
        title: todo.title,
        status: TODO_STATUS_TYPES.todo,
      };
    });
  }
}

export { TodosFactory };
