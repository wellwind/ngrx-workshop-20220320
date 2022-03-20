import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { undoneTodoItems } from '../stores/todo-list/todo-list.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(undoneTodoItems).subscribe(data => {
      console.log(data);
    })
  }

}
