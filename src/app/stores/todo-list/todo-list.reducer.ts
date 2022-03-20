import { createReducer, on } from '@ngrx/store';
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
  todoItems: [],
  count: 0,
};

export const todoListReducer = createReducer(
  initialState,

  on(TodoListActions.loadTodoLists, (state) => state),
  on(TodoListActions.loadTodoListsSuccess, (state, action) => state),
  on(TodoListActions.loadTodoListsFailure, (state, action) => state),

  // on(TodoListActions.addTodoList, (state, action) => {
  //   console.log(action.payload.text);
  //   return state;
  // })

  on(TodoListActions.initTodoList, (state) => ({
    ...state,
    todoItems: [
    {
      id: 1,
      text: 'Todo 1',
      done: true,
    },
    {
      id: 2,
      text: 'Todo 2',
      done: false,
    },
    ]
  })),

  on(TodoListActions.addTodoList, (state, action) => ({
    ...state,
    todoItems: [
      ...state.todoItems,
      { id: new Date().getTime(), text: action.payload.text, done : false }
    ]
  })),

  on(TodoListActions.replaceTodoItems, (state, action) => ({
    ...state,
    todoItems: action.items,
    count: action.count
  }))
);
