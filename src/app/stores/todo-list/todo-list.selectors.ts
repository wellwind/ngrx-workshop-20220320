import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodoList from './todo-list.reducer';

export const selectTodoListState = createFeatureSelector<fromTodoList.TodoListState>(
  fromTodoList.todoListFeatureKey
);

export const selectTodoItems = createSelector(
  selectTodoListState,
  (state: fromTodoList.TodoListState) => state.todoItems
);

/**
 * 取得未完成的代辦項目
 */
export const undoneTodoItems = createSelector(
  selectTodoItems,
  (state: fromTodoList.TodoItem[]) => state.filter(item => !item.done)
);

