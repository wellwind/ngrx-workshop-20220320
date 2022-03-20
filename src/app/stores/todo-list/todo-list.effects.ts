import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import * as TodoListActions from './todo-list.actions';


@Injectable()
export class TodoListEffects {
  loadTodoLists$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoListActions.loadTodoLists),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map((data) => TodoListActions.loadTodoListsSuccess({ data })),
          catchError((error) =>
            of(TodoListActions.loadTodoListsFailure({ error }))
          )
        )
      )
    );
  });

  queryTodoList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoListActions.queryTodoItems),
      concatMap(() =>
        this.todoListService
          .queryTodoList()
          .pipe(map((result) => TodoListActions.replaceTodoItems(result)))
      )
    );
  });

  constructor(
    private actions$: Actions,
    private todoListService: TodoListService
  ) {}
}

@Injectable({ providedIn: 'root' })
export class TodoListService {
  queryTodoList() {
    return of({
      items: [
        {
          id: 1,
          text: 'Todo 1 (from API)',
          done: true,
        },
        {
          id: 2,
          text: 'Todo 2 (from API)',
          done: false,
        },
      ],
      count: 2,
    });
  }
}
