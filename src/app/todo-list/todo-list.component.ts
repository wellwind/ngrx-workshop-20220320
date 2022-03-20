import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodoList, initTodoList, queryTodoItems } from '../stores/todo-list/todo-list.actions';
import { selectTodoItems } from '../stores/todo-list/todo-list.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  text = '';

  todoList$ = this.store.select(selectTodoItems);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectTodoItems).subscribe((data) => {
      console.log(data);
    });

    this.store.dispatch(initTodoList());
    this.store.dispatch(queryTodoItems());
  }

  add() {
    this.store.dispatch(addTodoList({ payload: { text: this.text } }));
  }
}
