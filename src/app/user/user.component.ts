import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    // this.store.select(undoneTodoItems).subscribe(data => {
    //   console.log(data);
    // })
  }

}
