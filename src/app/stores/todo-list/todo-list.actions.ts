import { createAction, props } from '@ngrx/store';
import { TodoItem } from './todo-list.reducer';

export const loadTodoLists = createAction(
  '[TodoList] Load TodoLists'
);

export const loadTodoListsSuccess = createAction(
  '[TodoList] Load TodoLists Success',
  props<{ data: any }>()
);

export const loadTodoListsFailure = createAction(
  '[TodoList] Load TodoLists Failure',
  props<{ error: any }>()
);

export const initTodoList = createAction(
  '[TodoList] Init TodoList'
);

export interface TodoItemCreate {
  text: string
}


export const addTodoList = createAction(
  '[TodoList] Add TodoList',
  props<{ payload: TodoItemCreate }>()
)

export const queryTodoItems = createAction(
  '[TodoList] Query TodoList',
);

export const replaceTodoItems = createAction(
  '[TodoList] Replace TodoList',
  props<{ items: TodoItem[], count: number }>()
)
