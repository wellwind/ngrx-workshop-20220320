import { Action, createReducer, on } from '@ngrx/store';
import * as TodoListActions from './todo-list.actions';

export interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

export const todoListFeatureKey = 'todoList';

export interface TodoListState {
  todoItems: TodoItem[];
  count: number;
}

export const initialState: TodoListState = {
  todoItems: [
    {
      id: 1,
      text: 'Todo 1',
      done: true
    },
    {
      id: 2,
      text: 'Todo 2',
      done: false
    }
  ],
  count: 0
};

export const todoListReducer = createReducer(
  initialState,

  on(TodoListActions.loadTodoLists, state => state),
  on(TodoListActions.loadTodoListsSuccess, (state, action) => state),
  on(TodoListActions.loadTodoListsFailure, (state, action) => state),

);
