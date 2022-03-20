import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTodoItems } from '../stores/todo-list/todo-list.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectTodoItems).subscribe(data => {
      console.log(data);
    })
  }

}
