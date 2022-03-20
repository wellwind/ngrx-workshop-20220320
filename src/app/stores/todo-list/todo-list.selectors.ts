import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodoList from './todo-list.reducer';

export const selectTodoListState = createFeatureSelector<fromTodoList.TodoListState>(
  fromTodoList.todoListFeatureKey
);

export const selectTodoItems = createSelector(
  selectTodoListState,
  (state: fromTodoList.TodoListState) => state.todoItems
);

export const undoneTodoItems = createSelector(
  selectTodoItems,
  (state: fromTodoList.TodoItem[]) => state.filter(item => !item.done)
);

